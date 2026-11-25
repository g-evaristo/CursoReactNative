// API de moedas:
// https://economia.awesomeapi.com.br/json/all
// https://economia.awesomeapi.com.br/json/all/BTC-BRL

// Para instalar o picker, rode:
// npx expo install @react-native-picker/picker

// Instalar a biblioteca axios:
// npx expo install axios
import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, TextInput, TouchableOpacity, Keyboard } from "react-native";
import styles from "./src/style";

// se der o export default não precisa de chave
// caso der apenas export, precisa de chave
import { PickerItem } from "./src/picker";
import { api } from "./src/services/api";

export default function App(){
  const [loading, setLoading] = useState(true);
  const [moedas, setMoedas] = useState([]);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null);
  const [moedaBValor, setMoedaBValor] = useState("");
  const [valorMoeda, setValorMoeda] = useState(null);
  const [valorConvertido, setValorConvertido] = useState(0);
  
  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get("all");
      let arrayMoedas = [];
      Object.keys(response.data).map( (key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key
        });
      });

      setMoedas(arrayMoedas);
      setMoedaSelecionada(arrayMoedas[0].key);
      setLoading(false);
    }

    loadMoedas();
  }, []);

  if(loading){
    return(
      <View style={styles.loading}>
        <ActivityIndicator color="#FFF" size="large" />
      </View>
    );
  }

  async function converter(){
    if(moedaBValor == 0 || moedaBValor == "" || moedaSelecionada == null){
      return;
    }

    const response = await api.get("/all/"+moedaSelecionada+"-BRL");

    console.log(response.data[moedaSelecionada].ask);

    let resultado = (response.data[moedaSelecionada].ask * parseFloat(moedaBValor));

    setValorConvertido(resultado.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}));
    setValorMoeda(moedaBValor);

    Keyboard.dismiss();
  }
  
  return(
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione sua moeda</Text>
        <PickerItem
          moedas={moedas}
          moedaSelecionada={moedaSelecionada}
          onChange={ (moeda) => setMoedaSelecionada(moeda) }
        />
      </View>

      <View style={styles.areaValor}>
        <Text style={styles.titulo}>Digite um valor para converter em R$</Text>
        <TextInput 
          style={styles.input}
          placeholder="Ex: 1.50"
          keyboardType="numeric"
          value={moedaBValor}
          onChangeText={ (valor) => setMoedaBValor(valor) }
        />
      </View>

      <TouchableOpacity style={styles.botaoArea} onPress={converter}>
        <Text style={styles.botaoText}>Converter</Text>
      </TouchableOpacity>

      {valorConvertido !== 0 && (
        <View style={styles.areaResultado}>
          <Text style={styles.valorConvertido}>{valorMoeda} {moedaSelecionada}</Text>
          <Text style={styles.textoValorConvertido}>corresponde a</Text>
          <Text style={styles.valorConvertido}>{valorConvertido}</Text>
        </View>
      )}
      
    </View>
  );
}
