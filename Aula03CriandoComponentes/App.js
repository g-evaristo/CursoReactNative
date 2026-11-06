import React, {Component} from "react";
import { View, Text, Image } from "react-native";

class App extends Component{
  render(){
    let nome= "Gabriel";
    let curso= "Técnico em Desenvolvimento de Sistemas";
    let unidade_curricular = "Programação para Dispositivos Móveis";
    let linguagem = "React Native";

    return(
      <View>
        <Text style={{ fontWeight: "bold", color: "#000FFF", fontSize: 30 }}>Nome: { nome }</Text>
        <Text>Curso: { curso }</Text>
        <Text>Unidade Curricular: { unidade_curricular }</Text>
        <Text>Linguagem: { linguagem }</Text>
        
        {/* Podemos chamar o componente criado em forma de tag */}
        {/* Além disso, podemos criar propriedades e depois utilizá-las dentro do componente criado */}
        <ImagemLogo largura={200} altura={200} />
        <ImagemLogoETexto largura={200} altura={200} texto={"ReactNative"} />
      </View>
    )
  }
}

export default App;

// Podemos criar componentes para serem reutilizados ao longo do código
// Evitando repetir blocos de códigos
// Se formos utilizar apenas um component, não precisamos utilizar a tag <View>
class ImagemLogo extends Component{
  render(){
    let image = "https://static.cdnlogo.com/logos/r/18/react-native.svg";

    return(
      /* 
        Para acessar as variáveis largura e altura utilizamos:
            this -> para indicar que é DESTE componente (ImagemLogo)
            props -> já que queremos acessar uma nova propriedade do componente
            nome -> para acessar a propriedade que desejarmos (largura ou altura)
      */
      <Image 
          source={{ uri: image }}
          style={{ width: this.props.largura, height: this.props.altura }}
      />
    )
  }
}

class ImagemLogoETexto extends Component{
  render(){
    let image = "https://static.cdnlogo.com/logos/r/18/react-native.svg";

    return(
      /* 
        Para acessar as variáveis largura e altura utilizamos:
            this -> para indicar que é DESTE componente (ImagemLogo)
            props -> já que queremos acessar uma nova propriedade do componente
            nome -> para acessar a propriedade que desejarmos (largura ou altura)
      */
      <View>
        <Image 
          source={{ uri: image }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text>{ this.props.texto }</Text>
      </View>
    )
  }
}