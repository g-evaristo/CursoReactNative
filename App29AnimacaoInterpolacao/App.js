import { useRef, useEffect, useState } from "react";
import { View, Text, Animated } from "react-native";
import styles from "./src/style";

export default function App(){
  const larguraAnimada = useRef(new Animated.Value(0)).current;
  const alturaAnimada = useRef(new Animated.Value(5)).current;
  const [carregada, setCarregada] = useState(false);

  useEffect(() => {
    Animated.sequence([

      Animated.timing(larguraAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false
      }),

      Animated.timing(alturaAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false
      }),

    ]).start( () => { setCarregada(true); });
  }, []);

  let porcentagemLargura = larguraAnimada.interpolate({
    inputRange: [0, 100], // entrada
    outputRange: ['0%', '100%'] // vai sair de 0% até 100%
  });

  let porcentagemAltura = alturaAnimada.interpolate({
    inputRange: [0, 100], // entrada
    outputRange: ['0%', '100%'] // vai sair de 0% até 100%
  });

  return(
    <View style={styles.container}>
      <Animated.View 
        style={{
          width: porcentagemLargura,
          height: porcentagemAltura,
          backgroundColor: "#4169e1",
          justifyContent: "center"
        }}
      >
        { /* Quando terminar de carregar, ele exibe a mensagem */}
        { carregada && <Text style={styles.articleText}>Bem-vindo(a)...</Text> }
      </Animated.View>
    </View>
  );
}