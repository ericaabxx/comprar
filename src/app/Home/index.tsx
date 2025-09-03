//importa os components nativos
import { View, Image } from "react-native"
import { styles } from "./styles"

export function Home(){
// retorna essa funcao app
  return (
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")}  style={styles.logo}/>
      </View>
  )
}

