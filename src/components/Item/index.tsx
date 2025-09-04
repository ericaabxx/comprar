import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { styles } from "./styles";
import { StatusIcon } from "../StatusIcon";
import { FilterStatus } from "@/types/FilterStatus";

type ItemData = {
    status: FilterStatus
    description: string
}

type Props = {
    data: ItemData
    onRemove: () => void
    onStatus: () => void
}

export function Item({ data, onStatus, onRemove }: Props){
    return(
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
                <StatusIcon status={data.status} />
            </TouchableOpacity>

            <Text style={styles.description}>
                {data.description}
            </Text>
            <TouchableOpacity onPress={onRemove}>
            <MaterialCommunityIcons name="trash-can-outline" size={20} color="#828282" />
            </TouchableOpacity>
        </View>
    )
}