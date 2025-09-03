//importa os components nativos
import { View, Text, StyleSheet } from "react-native"
import { styles } from "./styles"

//exporta uma funcao padrao
export default function App(){
// retorna essa funcao app
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, World!</Text>
      </View>
  )
}

