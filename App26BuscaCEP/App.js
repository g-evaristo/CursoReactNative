// API ViaCEP
// https://viacep.com.br/ws/13711160/json

// Instalar a biblioteca axios:
// npx expo install axios
import { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import styles from "./src/style";
import api from "./src/services/api";

export default function App(){
  const [cep, setCep] = useState('');
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);

  function limpar(){
    setCep('');
    inputRef.current.focus();
    setCepUser(null);
  }

  async function buscar(){
    if(cep == ""){
      alert("Digite um CEP válido!");
      setCep("");
      return;
    }

    try{
      const response = await api.get("/"+cep+"/json"); 
      console.log(response.data);
      setCepUser(response.data);
      Keyboard.dismiss(); // garantir que o teclado será fechado
    }
    catch(error){
      console.log("ERROR"+ error);
    }
    
  }

  return(
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput 
          style={styles.input}
          placeholder="Ex: 13711160"
          value={cep}
          onChangeText={ (texto) => setCep(texto) }
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        {/* botão buscar */}
        <TouchableOpacity style={[styles.botao, styles.azul]} onPress={ buscar }>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        {/* botão limpar */}
        <TouchableOpacity style={[styles.botao, styles.vermelho]} onPress={ limpar }>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      { cepUser && 
        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
        </View>
      }
    </View>
  );
}