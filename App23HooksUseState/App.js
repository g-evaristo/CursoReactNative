// API React Hooks é utilizada para reduzir a verbozidade do código
// Instalar a biblioteca
// npx expo install @react-native-async-storage/async-storage 
import React, {useState, useEffect, useMemo, useRef} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(){
  // Posição 0 do array -> nome do estado
  // Posição 1 do array -> função para alterar os dados
  // Valor entre parênteses -> valor inicial do estado
  const [nome, setNome] = useState('');
  const [inputNome, setInputNome] = useState('');
  const nomeInput = useRef(null);

  // Buscar os dados salvos no AsyncStorage para exibir na tela
  useEffect(() => {
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if(nomeStorage != null){
        setNome(nomeStorage);
      }
    }

    getStorage();

  }, []);
  
  // Primeiro parâmetro: uma função
  // Segundo parâmetro: um array de estados para a função ficar monitorando
  useEffect(() => {
    // Toda vez que o nome for alterado vai chamar essa função
    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome);
    }

    saveStorage();

  }, [nome]);
  
  function alteraNome(){
    setNome(inputNome);
    setInputNome(''); // limpa o valor do TextInput
  }

  function novoNome(){
    nomeInput.current.focus();
  }

  // useMemo economiza renderização, apenas chamando a função quando for necessário!
  const letrasNome = useMemo(()=>{
    console.log(nome.length);
    return nome.length;
  }, [nome]);

  return(
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Nome..."
        value={inputNome}
        onChangeText={ (texto) => setInputNome(texto) }
        ref={nomeInput}
      />

      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>Altera Nome</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.texto}>O nome "{nome}" tem {letrasNome} letras!</Text>

      <TouchableOpacity style={styles.btn} onPress={novoNome}>
        <Text style={styles.btnText}>Novo nome</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 15,
  },

  texto:{
    color: "#000",
    fontSize: 35,
    margin: 10,
  },

  input:{
    borderWidth: 2,
    padding: 10,
    margin: 10,

  },

  btn:{
    backgroundColor: "#222",
    padding: 10,
    margin: 10,
  },

  btnText:{
    fontSize: 20,
    color: "#FFF",
    textAlign: "center"
  }
});