// Crie uma pasta "src" dentro do projeto
// Baixe as duas imagens e coloque dentro da pasta "src"
import { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      numero: 0,
      botao: "INICIAR",
      ultimo: null
    };

    // Variável para controlar o timer relógio
    this.timer = null;

    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar(){
    // Se o timer for diferente de null, então o relógio já está rodando
    if(this.timer != null){
      // Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: "INICIAR"}); // muda o texto do bitao para "INICIAR"
    }
    else{
      // Aqui começa a girar o timer
      this.timer = setInterval( () => {
        this.setState({numero: this.state.numero + 0.1})
      }, 100); // setInterval roda de acordo com um intervalo definido

      this.setState({botao: "PARAR"}); // muda o texto do bitao para "PARAR"
    }
  }

  limpar(){
    // Se o timer for diferente de null, então o relógio já está rodando
    if(this.timer != null){
      // Aqui vai parar o timer
      clearInterval(this.timer);
    }
    this.setState({numero: 0, botao: "INICIAR", ultimo: this.state.numero,}); // zera o timer, muda o texto do botão e salva o último timer
  }

  render(){
    return(
      <View style={styles.container}>

        <Image 
          source={require("./src/cronometro.png")}
          style={styles.cronometro}
        />

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text> {/* toFixed(1) deixa com 1 casa após a vírgula */}

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text> {/* Muda o texto do botão dinâmicamente. Se o usuário clicar, atualiza para "PARAR". Se parar, atualiza para "INICIAR"  */}
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltima}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''}
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aeef"
  },

  timer:{
    marginTop: -160, // faz o número do timer "subir" para o centro da imagem
    color: "#FFF",
    fontSize: 65,
    fontWeight: "bold"
  },

  btnArea:{
    flexDirection: "row",
    marginTop: 70,
    height: 40
  },

  btn:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: 40,
    margin: 17,
    borderRadius: 9,
    width: 150
  },

  btnTexto:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef"
  },

  areaUltima:{
    marginTop: 40,
  },

  textoCorrida:{
    fontSize:25,
    fontStyle:'italic',
    color: '#FFF'
  }

});

export default App;