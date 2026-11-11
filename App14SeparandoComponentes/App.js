// Crie uma pasta "src"
// Cria uma pasta "Pessoas"
// Dentro da pasta "Pessoas", crie um arquivo "index.js"
import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// Vamos importar o componente Pessoas. Como tem um arquivo index.js, o react já busca ele como "principal"
import Pessoas from "./src/Pessoas";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      feed:[
        {id:"1", nome: "Gabriel", idade: 26, email: "gabriel@email.com"},
        {id:"2", nome: "Samuel", idade: 24, email: "samuel@email.com"},
        {id:"3", nome: "Leonardo", idade: 28, email: "leonardo@email.com"},
        {id:"4", nome: "Luiz", idade: 40, email: "luiz@email.com"},
      ]
    }
  }

  render(){
    return(
      <View style={styles.container}>
        {this.state.feed.map((item) => (
          <Pessoas key={item.id} data={item} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

export default App;