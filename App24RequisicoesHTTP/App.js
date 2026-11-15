// Instalar a biblioteca axios:
// npx expo install axios
import React, {useEffect, useState} from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import styles from "./src/style";
import api from "./src/services/api";
import Filmes from "./src/filmes";

export default function App(){
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Chama quando a tela for montada
  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      // console.log(response.data);
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if(loading){
    return(
      <View style={styles.loading}>
        <ActivityIndicator 
          color="#e52246"
          size={45}
        />
      </View>
    );
  }
  else{
    return(
      <View style={styles.container}>

        <FlatList
          data={filmes}
          keyExtractor={ item =>  String(item.id) }
          renderItem={ ({ item }) => <Filmes data={item} /> }
        />

      </View>
    );
  }
}