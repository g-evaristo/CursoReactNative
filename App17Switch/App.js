import { Component } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      status: false
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
        />

        <Text style={styles.texto}>
          {(this.state.status) ? "Ativo" : "Inativo" }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 15,
    alignItems: "center"
  },

  texto:{
    fontSize: 30,
    textAlign: "center"
  }
});

export default App;