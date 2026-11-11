// Instalar o Async Storage para manter os dados salvos mesmo depois de fechar o app
// npx expo install @react-native-async-storage/async-storage
import { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from "react-native";

// Importar o Async Storage
// Dados assíncronos são aqueles que demoram para ser carregados
// Dessa forma, para não travar a aplicação, fazemos uma requisição assíncrona, para que a tela seja exibida enquanto os dados são carregados
import AsyncStorage from "@react-native-async-storage/async-storage";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      input: '',
      nome: ''
    };

    this.gravaNome = this.gravaNome.bind(this);
  }

  // Ciclo de vida:
  // Quando o react native é carregado, ele tem um ciclo de vida
  // Ele pode ser alterado de acordo com a alteração dos states
  // 1 - ComponentDidMount - É executado quando o componente é montado em tela
  async componentDidMount(){
    await AsyncStorage.getItem('nome').then(
      (value) =>  {this.setState({nome: value})} 
    );
  }

  // 2 - ComponentDidUpdate - Monitora toda vez que um state é alterado para realizar uma ação
  async componentDidUpdate(_, prevState){
    const nome = this.state.nome;

    if(prevState != nome){
      await AsyncStorage.setItem('nome', nome); // espera até que tenha um resultado
    }
  }

  gravaNome(){
    this.setState({
      nome: this.state.input
    });

    alert("Salvo com sucesso!");
    Keyboard.dismiss();
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            value={this.state.input}
            onChangeText={ (text) => this.setState({input: text}) }
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity onPress={this.gravaNome}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.nome}>{this.state.nome}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    alignItems: "center"
  },

  viewInput:{
    flexDirection: "row",
    alignItems: "center"
  },

  input:{
    width: 350,
    height: 40,
    borderColor: "#222",
    borderWidth: 1,
    padding: 10
  },

  botao:{
    backgroundColor: "#222",
    color: "#FFF",
    height: 40,
    padding: 10,
    marginLeft: 3
  },

  nome:{
    fontSize: 30,
    textAlign: "center",
    marginTop: 15,
  }
});

export default App;