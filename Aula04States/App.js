/*  
  props -> estático
  states -> mutáveis
 */
import React, {Component} from "react";
import { View, Text, Button } from "react-native"; // importe o componente Button

class App extends Component{
  // O constructor é executado automaticamente quando o componente é instanciado.
  // Ele Recebe as propriedades (props) enviadas para o componente.
  constructor(props) {
    // Chama o construtor da classe pai (React.Component).
    // Isso permite que o componente utilize corretamente os recursos (propriedades) herdados do React.
    super(props);

    // Inicializa o estado do componente.
    this.state = {
        // Define o valor inicial da variável nome.
        nome: "Gabriel"
    };

    // Permite que a função "clicar" acesse o estado (state) e propriedades (props) das variáveis
    this.clicar = this.clicar.bind(this);
  }

  // Criar a função "clicar" para alterar o estado da variável "nome"
  clicar(){
    // O setState altera o estado do constructor, permitindo alterar os valores das variáveis
    this.setState({
      nome: "Seja bem-vindo, Gabriel!"
    })
  }

  render(){
    return(
      <View style={{ marginTop: 20 }}>
        
        {/* Para criar um botão, utilize o Button, passando um título */}
        {/* Além disso, pode-se utilizar o onPress para chamar uma função ao clicar no botão */}
        <Button title="Clicar" onPress={this.clicar} />

        {/* Para acessar, basta chamar o this, o state e a props*/}
        <Text style={{ fontSize: 23, color: "#000FFF" }}> { this.state.nome }</Text>
      </View>
    )
  }
}

export default App;