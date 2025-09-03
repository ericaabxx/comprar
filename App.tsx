//importa os components nativos
import { View, Text } from "react-native"

//exporta uma funcao padrao
export default function App(){
// retorna essa funcao app
  return (
// o flex pega todo o tamanho disponivel de tela
      <View style={{ flex:1, justifyContent: "center" }}>
        <Text>Hello, World!</Text>
      </View>
  )
}

