import { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: ""
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    {/* SE o tamanho do texto for maior que 0 */}
    if(texto.length > 0){ 
      this.setState({nome: 'Bem vindo(a), '+texto+'!'}); {/* Altera o estado (state) da página, atualizando o nome de acordo com o que o usuário digitar */}
    }
    else{
      this.setState({nome: ''}); {/* Altera o estado (state) da página, atualizando o nome para vazio, já que nada foi digitado */}
    }
    
  }

  render(){
    return(
      <View style={ styles.container }>
        <TextInput 
          style={ styles.input } 
          placeholder="Nome..." 
          onChangeText={this.pegaNome} 
        /> {/* Cria um campo para digitação de texto */}

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