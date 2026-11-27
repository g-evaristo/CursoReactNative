import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./src/style";

export default function App(){
  const maximo = 15;
  const [qtd, setQtd] = useState(0);
  const [isDisabledAdicionar, setIsDisabledAdicionar] = useState(false);
  const [isDisabledRemover, setIsDisabledRemover] = useState(true);

  // se a quantidade for 0
  // muda o botão remover para desabilitado
  useEffect(() => {
    if(qtd == 0){
      setIsDisabledRemover(true);
    }
    else{
      setIsDisabledRemover(false);
    }
  }, [qtd]); 

  // se a quantidade for igual ao máximo definido
  // muda o botão adicionar para desabilitado
  useEffect(() => {
    if(qtd == maximo){
      setIsDisabledAdicionar(true);
    }
    else{
      setIsDisabledAdicionar(false);
    }
  }, [qtd]);

  function adicionar(){
    if(qtd < maximo){
      setQtd(qtd+1);
    }
  }

  function remover(){
    if(qtd > 0){
      setQtd(qtd - 1);
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Pessoas no restaurante:</Text>

      <View style={styles.bloco}>
        <Text style={styles.blocoText}>{qtd}</Text>
      </View>

      {qtd == maximo && 
        <View style={styles.areaMensagem}>
          <Text style={styles.areaMensagemText}>Restaurante está no limite de pessoas!</Text>
        </View>
      }

      <View style={styles.areaBotao}>
        {/* no style, fazemos uma renderização condicional
            dessa forma, se o botão estiver desabilitado, altera o estilo */}
        <TouchableOpacity style={[styles.btn, isDisabledAdicionar && styles.btnDisabled]} onPress={ adicionar } disabled={isDisabledAdicionar}>
          <Text style={styles.btnText}>Adicionar</Text>
        </TouchableOpacity>
        
        {/* no style, fazemos uma renderização condicional
            dessa forma, se o botão estiver desabilitado, altera o estilo */}
        <TouchableOpacity style={[styles.btn, isDisabledRemover && styles.btnDisabled]} onPress={ remover } disabled={isDisabledRemover}>
          <Text style={styles.btnText}>Remover</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}