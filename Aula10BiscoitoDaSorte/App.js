// Crie uma pasta "src" dentro do projeto
// Baixe as duas imagens e coloque dentro da pasta "src"
import { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"; // TouchableOpacity é um novo tipo de botão

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      textoFrase: "",
      img: require('./src/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível",
      "Acredito em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso."
    ];
  }

  quebraBiscoito(){
    // Math.floor -> números inteiros
    // Math.random -> número aleatório
    // * -> qual a faixa de números desejada
    // this.frases.length -> tamanho do array (se for de tamanho 6, vai sortear de 0 a 5)
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    // Atualiza a frase de acordo com o número aleatório gerado acima
    // Muda a imagem para o biscoito aberto
    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    });

  }

  render(){
    return(
      <View style={styles.container}>
        
        {/* Invés de utilizarmos o URI, utilizaremos a imagem local */}
        <Image 
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar o biscoito!</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  img:{
    width: 250,
    height: 250
  },

  textoFrase:{
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center"
  },

  botao:{
    width: 200,
    height: 50,
    borderWidth: 2, // expessura da borda
    borderColor: "#dd7b22",
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
    color: "#dd7b22",
  }

  
});

export default App;