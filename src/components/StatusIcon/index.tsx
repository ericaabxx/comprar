import { FilterStatus } from "@/types/FilterStatus";
import { MaterialCommunityIcons } from "@expo/vector-icons"

export function StatusIcon({ status }: { status: FilterStatus }) {
  return status === FilterStatus.DONE ? (
    <MaterialCommunityIcons name="check-circle-outline" size={18} color="#2c46b1" />
  ) : (
    <MaterialCommunityIcons name="circle-outline" size={18} color="#000" />
  )
}