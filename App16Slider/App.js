// Instalar o slider:
// npx expo install @react-native-community/slider
import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// Importando o slider
import Slider from '@react-native-community/slider';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      valor: 0
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado}) }
          value={this.state.valor}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FF0000"
        />

        <Text style={styles.texto}>{this.state.valor.toFixed(0)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 15
  },

  slider:{
    width: 300, 
    height: 40, 
    alignSelf: "center"
  },

  texto:{
    textAlign: "center",
    fontSize: 30
  }
});

export default App;