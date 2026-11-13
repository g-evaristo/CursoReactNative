// Crie uma pasta "src"
// Crie um arquivo "entrar.js"
// Crie um arquivo "style.js"
import { Component } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";

import Entrar from './src/entrar';
import styles from './src/style';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      modalVisivel: false

    };
    
    this.entrar = this.entrar.bind(this);
    this.fechar = this.fechar.bind(this);
  }

  entrar(){
    this.setState({
      modalVisivel: true,
    });
  }
  
  fechar(visivel){
    this.setState({
      modalVisivel: visivel,
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Button title="Entrar" onPress={this.entrar}/>

        {/* animationType -> tipo da animação */}
        {/* slide -> subir de baixo para cima */}
        {/* fade -> surgir devagar */}
        <Modal animationType="slide" visible={this.state.modalVisivel} transparent={true}>
          <View style={styles.estiloModal}>
            <Entrar fechar={ () => this.fechar(false) }/>
          </View>
        </Modal>

      </View>
    );
  }

}

export default App;