import { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Modal } from "react-native";
import styles from "./src/style";
import Resultado from "./src/resultado";

class App extends Component{
    constructor(props){
      super(props);

      this.state = {
        modalVisivel: false,
        precoAlcool: "",
        precoGasolina: "",
        total: ""
      };

      this.calcular = this.calcular.bind(this);
      this.fechar = this.fechar.bind(this);
    }

    calcular(){
      if(
        this.state.precoAlcool.trim() === "" ||
        this.state.precoGasolina.trim() === "" ||
        !Number.isFinite(Number(this.state.precoAlcool)) ||
        !Number.isFinite(Number(this.state.precoGasolina)) ||
        Number(this.state.precoAlcool) <= 0 ||
        Number(this.state.precoGasolina) <= 0
      ){
          alert("Digite um valor válido!");
          return;
      }
      else{
        this.setState({
          modalVisivel: true,
        });
      }
    }

    fechar(){
      this.setState({
        modalVisivel: false,
      });
    }

    render(){
      return(
        <View style={styles.container}>

          <Image 
            source={require('./src/logo.png')}
          />

          <Text style={styles.titulo}>Qual a melhor opção?</Text>

          <TextInput 
            style={ styles.input } 
            placeholder="Álcool (preço por litro)..."
            onChangeText={ (valor) => {this.setState({precoAlcool: valor})}}
          />

          <TextInput 
            style={ styles.input } 
            placeholder="Gasolina (preço por litro)..."
            onChangeText={ (valor) => {this.setState({precoGasolina: valor})}}
          />

          <TouchableOpacity style={styles.botao} onPress={this.calcular}>
            <View>
              <Text style={styles.btnTexto}>Abrir Conta</Text>
            </View>
          </TouchableOpacity>

          <Modal animationType="slide" visible={this.state.modalVisivel} transparent={false}>
            <View style={styles.estiloModal}>
              <Resultado fechar={ () => this.fechar(false) }/>
            </View>
          </Modal>
        </View>
      );
    }
}

export default App;