// Para instalar o pikcer, rode:
// npx expo install @react-native-picker/picker

// Na documentação, existe a forma de importar e exemplos:
// https://github.com/react-native-picker/picker

// Crie uma pasta "src", baixe a imagem da piza e inclua na pasta

import { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      pizza: 0, // salva a posição no array dos valores de pizza
      pizzas: [
        {key:0, nome:"Selecione..", valor: 0},
        {key:1, nome:"Calabresa", valor: 55.90},
        {key:2, nome:"Portuguesa", valor: 65.90},
        {key:3, nome:"Muçarela", valor: 45.90},
        {key:4, nome:"Brigadeiro", valor: 35.90},
      ]
    }
  }

  render(){

    // Variável que vai mapear o array e percorrer cada posição dele
    {/* No Piker.item, temos que informar:
      key   -> identificador, 
      value -> valor
      label -> rótulo */}
    let pizzasItem = this.state.pizzas.map( (value, key) => {
      return <Picker.Item key={key} value={key} label={value.nome} />
    });

    return(
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>

        <Image style={styles.img} source={require("./src/pizza.png")} />

        <Picker style={styles.picker}
          selectedValue={this.state.pizza}
          onValueChange={ (itemValue, itemIndex) => this.setState({pizza: itemValue}) }
        >
          {pizzasItem}
        </Picker>
        
        <Text style={styles.pizza}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizza}>R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
  },

  logo:{
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold"
  },

  img:{
    width: 300,
    height: 300,
    alignSelf: "center",
  },

  pizza:{
    marginTop: 15,
    fontSize: 25,
    textAlign: "center"
  },

  picker:{
    margin: 20,
    padding: 15,
    fontSize: 15
  }

});

export default App;