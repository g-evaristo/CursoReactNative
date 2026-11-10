import { Component } from "react";
import { View, Text } from "react-native";

class App extends Component{
  render(){
    return(
      <View style={{flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center"}}> 
        {/* flexDirection define a direção do conteúdo interno da View*/}
          {/* Por padrão, é definido como column (coluna). Um conteúdo embaixo do outro. */}
          {/* Se definirmos como row (linha), altera para um conteúdo ao lado do outro. */}
        
        {/* justifyContent serve para alterar a posição do conteúdo interno da View na página. */}
          {/* justifyContent -> center -> centraliza */}
          {/* justifyContent -> flex-end -> alinha no final da página (direita) */}
          {/* justifyContent -> flex-start -> alinha no início da página (esquerda) */}
          {/* justifyContent -> space-between -> adiciona espaço entre as Views. */}
          {/* justifyContent -> space-around -> adiciona espaço entre e ao redor das Views. */}

        {/* alignItems serve para alterar a posição dos elementos verticalmente*/}
          {/* alignItems -> center -> centraliza verticalmente */}
          {/* alignItems -> flex-start -> alinha verticalmente no topo da página */}
          {/* alignItems -> flex-end -> alinha verticalmente no final da página */}
        <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View> 
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View>
      </View>
    );
  }
}

export default App;