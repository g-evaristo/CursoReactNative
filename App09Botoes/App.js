// Copie todo o código da Aula08RecebendoDados
import { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: "",
      input: "" // cria um estado vazio do input
    };

    this.entrar = this.entrar.bind(this);
  }



  entrar(){
    // Quando o usuário clicar no botão, o texto que estava salvo em "input" será salvo em "nome" para ser exibido para o usuário
    if(this.state.input == ""){
      alert("Digite seu nome!")
      return; // para a execução
    }
    this.setState({
      nome: 'Bem vindo(a), '+ this.state.input + "!"
    })
  }

  render(){
    return(
      <View style={ styles.container }>
        <TextInput 
          style={ styles.input } 
          placeholder="Nome..." 
          onChangeText={ (texto) => this.setState({input: texto}) }  // altera o estado da página, mudando o "input" de acordo com o texto digitado pelo usuário
        /> 

        <Button title="Entrar" onPress={this.entrar} /> {/* Adiciona um botão que, ao ser clicado, chama a função "entrar" */}

        <Text style={ styles.texto }>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  
  texto:{
    textAlign: "center",
    fontSize: 25
  }
});

export default App;
