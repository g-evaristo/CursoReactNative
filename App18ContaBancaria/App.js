// Conta Bancária
/*
- Banco React;
- Criar um formulário de cadastro com os campos:
  - Nome (TextInput)
  - Idade (TextInput)
  - Sexo (Picker)
  - Seu Limite (Slider)
  - Estudante (Switch)
  - Botão "Abrir Conta" que apresenta os dados em forma de alerta

- O sistema não deve exibir o alerta se os dados estiverem em branco!
*/
import { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, Switch, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from '@react-native-community/slider';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      nome: "",
      idade: 0,
      sexo: 0, // salva a posição no array dos valores de pizza
      sexos: [
        {key:0, nome:"Selecione..", valor: ""},
        {key:1, nome:"Masculino", valor: "Masculino"},
        {key:2, nome:"Feminino", valor: "Feminino"}
      ],
      limite: 0,
      estudante: false
    }

    this.abrirConta = this.abrirConta.bind(this);
  }

  abrirConta(){
    if(this.state.nome == ""){
      alert("Digite seu nome!");
    }
    else if(this.state.idade == ""){
      alert("Digite sua idade!");
    }
    else if(!Number.isInteger(Number(this.state.idade)) || Number(this.state.idade) < 0){
      alert("Digite uma idade válida!");
    }
    else if(this.state.sexo == ""){
      alert("Selecione seu sexo!");
    }
    else{
      alert("Conta Criada! "
        + "\nNome: "+(this.state.nome)
        + "\nIdade: "+(this.state.idade)
        +"\nSexo: "+(this.state.sexos[this.state.sexo].nome)
        +"\nLimite da Conta: "+(this.state.limite.toFixed(0))+",00"
        +"\nEstudante: "+(this.state.estudante ? "Sim" : "Não"));
    }
  }

  render(){
    let sexosItem = this.state.sexos.map( (value, key) => {
      return <Picker.Item key={key} value={key} label={value.nome} />
    });


    return(
      <ScrollView
        style={styles.container}
      >
        <Image 
          style={styles.img}
          source={require("./src/logo.webp")} 
        />

        <Text style={styles.titulo}>Banco React</Text>
        
        <TextInput 
          style={ styles.input } 
          placeholder="Nome..."
          onChangeText={ (valor) => {this.setState({nome: valor})}}
        />

        <TextInput 
          style={ styles.input } 
          keyboardType="numeric"
          placeholder="Idade..." 
          onChangeText={ (valor) => {this.setState({idade: valor})}}
        />

        <Text style={styles.texto}>Sexo: </Text>
        <Picker style={styles.picker}
          selectedValue={this.state.sexo}
          onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue}) }
        >
          {sexosItem}
        </Picker>

        <Text style={styles.texto}>Limite (R$ 0,00 - R$ 1.500,00):</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1500}
          onValueChange={ (valorSelecionado) => this.setState({limite: valorSelecionado}) }
          value={this.state.limite}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FF0000"
        />
        <Text style={[styles.texto, styles.centro]}>R$ {this.state.limite.toFixed(0)},00</Text>
        
        <View style={styles.linha}>
          <Switch
            value={this.state.estudante}
            onValueChange={ (valorSwitch) => this.setState({estudante: valorSwitch})}
          />
          
          <Text style={styles.textoEstudante}>Estudante: {(this.state.estudante) ? "Sim" : "Não" }</Text>
        </View>

        <TouchableOpacity style={styles.botao} onPress={this.abrirConta}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>Abrir Conta</Text>
            </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 20
  },

  conteudo: {
    padding: 20,
    paddingBottom: 50,
  },

  titulo:{
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#003b6f"
  },

  img:{
    width: 111,
    height: 100,
    alignSelf: "center",
    marginTop: 50
  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    margin: 10,
    fontSize: 20,
    padding: 10
  },

  picker:{
    margin: 10,
    padding: 15,
    fontSize: 15
  },

  slider:{
    margin: 10
  },

  texto:{
    margin: 10,
    fontSize: 20
  },
  
  centro:{
    textAlign: "center"
  },

  linha:{
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },

  textoEstudante:{
    fontSize: 20,
    marginLeft: 10,
  },
  
  botao:{
    width: 350,
    height: 50,
    borderWidth: 2, // expessura da borda
    borderColor: "#003b6f",
    borderRadius: 25
  },

  btnArea:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  btnTexto:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#003b6f",
  }
});

export default App;