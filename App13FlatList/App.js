import { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
// FlatList serve para alocar na memória apenas os itens que estão sendo exibidos na tela do usuário
// Se você tiver uma página com muitas informações, como o feed do Instagram, apenas as informações que estão
// na tela estarão sendo exibidas e alocadas na memória.
// É uma excelente ferramenta para páginas extensas e com muitos conteúdos.

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
        <FlatList
          data={this.state.feed} // lista de dados que serão recebidos
          keyExtractor={(item) => item.id}
          renderItem={ ({item}) => <Pessoa data={item} /> } // responsável por renderizar os itens na tela
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  areaPessoa:{
    backgroundColor: "#222",
    height: 200,
    marginBottom: 15,
  },

  textoPessoa:{
    color: "#FFF",
    fontSize: 20,
  },
});

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade} </Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email} </Text>
      </View>
    );
  }
}

export default App;