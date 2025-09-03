//importa os components nativos
import { View, Text, StyleSheet } from "react-native"
import { styles } from "./styles"

export function Home(){
// retorna essa funcao app
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, World!</Text>
      </View>
  )
}

