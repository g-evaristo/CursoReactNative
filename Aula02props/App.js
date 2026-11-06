// Props - são propriedades que podem ser utilizadas no react-native para estilizar páginas
import React, {Component} from 'react';

// View, Text, Image são componetes pré-definidos do react-native
import { View, Text, Image } from 'react-native';

// Criamos nosso component chamado App
class App extends Component{
  // Utilizamos o render para tudo que será exibido na tela
  render(){
    // Podemos utilizar variáveis para retornar os dados
    let nome = "Gabriel";
    let imagem = "https://assets.vogue.com/photos/69022417bcffe9126391ad61/master/w_2560%2Cc_limit/GettyImages-2151811666.jpg";


    return(
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro app.</Text>

        {/* Para estilizar, utilizamos o style, como no HTML */}
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>Técnico em Desenvolvimento de Sistemas</Text>

        {/*
          Para utilizarmos imagens:
            - chamamos a tag <Image />
            - passamos o link da imagem utilizando source (fonte) com uri
            - é obrigatório estilizar, passando a largura e a altura
        */}
        <Image 
          source={{ uri: 'https://assets.vogue.com/photos/69022417bcffe9126391ad61/master/w_2560%2Cc_limit/GettyImages-2151811666.jpg' }}
          style={{ width: 300, height: 400 }}
        />

        {/* Para chamar uma variável, basta usar {} */}
        <Text style={{ fontSize: 30 }}>{nome}</Text>

        {/* Na uri não precisa utilizar {}, já que temos uma chave "por fora", ou seja, já estamos dentro de um ambiente javascript */}
        <Image 
          source={{ uri: imagem }}
          style={{ width: 100, height: 200 }}
        />
      </View>
    );
  }
}

export default App;