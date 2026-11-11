import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native"; // importe o StyleSheet (folha de estilo)

class App extends Component{
  render(){
    return(
      // No style, basta chamar o nome da folha de estilo criada e estilo desejável
      <View style={ styles.espacamento }>
        <Text style={ styles.textos }>Eu sou o texto 1</Text>
        <Text style={ styles.alinhaTexto }>Eu sou o texto 2</Text>
        <Text>Eu sou o texto 3</Text>
        
        {/* Podemos passar vários estilos para um mesmo texto, utilizando [] */}
        <Text style={[ styles.textos, styles.alinhaTexto ]}>Eu sou o texto 4</Text>
      </View>
    )
  }
}

// Cria a folha de estilos, como fazemos com a tag <style> no HTML
const styles = StyleSheet.create({
  espacamento:{
    flex: 1, // Ocupa todo o espaço disponível na tela
    marginTop: 100,
    marginLeft: 20
  },
  textos:{
    fontSize: 25,
    color: '#000FFF'
  },
  alinhaTexto:{
    textAlign: "center"
  }
})

export default App;