import { useRef, useEffect } from "react";
import { View, Text, Animated } from "react-native";
import styles from "./src/style";

export default function App(){
  const larguraAnimada = useRef(new Animated.Value(150)).current;
  const alturaAnimada = useRef(new Animated.Value(50)).current;

  const larguraAnimada2 = useRef(new Animated.Value(150)).current;
  const alturaAnimada2 = useRef(new Animated.Value(50)).current;
  const opcidadeAnimada2 = useRef(new Animated.Value(1)).current;

  const larguraAnimada3 = useRef(new Animated.Value(150)).current;
  const alturaAnimada3 = useRef(new Animated.Value(50)).current;
  const opcidadeAnimada3 = useRef(new Animated.Value(1)).current;

  const larguraAnimada4 = useRef(new Animated.Value(150)).current;
  const alturaAnimada4 = useRef(new Animated.Value(50)).current;
  const opcidadeAnimada4 = useRef(new Animated.Value(1)).current;

  // timing faz as duas animações ao mesmo tempo
  useEffect(() => {

    Animated.timing(larguraAnimada, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: true
    }).start();

    Animated.timing(alturaAnimada, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: true
    }).start();

  }, []);

  // sequence segue a sequência, fazendo uma animação primeiro e depois a outra
  // loop fica rodando em sequência
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(larguraAnimada2, {
          toValue: 400,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(alturaAnimada2, {
          toValue: 100,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(opcidadeAnimada2, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false
        }),
        Animated.timing(opcidadeAnimada2, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false
        }),
        Animated.timing(larguraAnimada2, {
          toValue: 150,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(alturaAnimada2, {
          toValue: 50,
          duration: 2000,
          useNativeDriver: false
        }),
      ])
    ).start();
    

  }, []);

  // parallel executa tudo ao mesmo tempo
  useEffect(() => {

    Animated.parallel([
      Animated.timing(larguraAnimada3, {
        toValue: 400,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(alturaAnimada3, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(opcidadeAnimada3, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false
      })
    ]).start();

  }, []);

  // amabas
  useEffect(() => {

    Animated.sequence([
      Animated.timing(opcidadeAnimada4, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.parallel([
        Animated.timing(alturaAnimada4, {
          toValue: 200,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(opcidadeAnimada4, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false
        }),
      ]),

    ]).start();

  }, []);

  return(
    <View style={styles.container}>
      {/* timing */}
      <Animated.View 
        style={{
          width: larguraAnimada,
          height: alturaAnimada,
          backgroundColor: "#4169e1",
          justifyContent: "center"
        }}
      >
        <Text style={styles.articleText}>Carregando...</Text>
      </Animated.View>
      
      {/* sequence */}
      <Animated.View 
        style={{
          width: larguraAnimada2,
          height: alturaAnimada2,
          backgroundColor: "#54e141",
          justifyContent: "center",
          marginTop: 15,
          opacity: opcidadeAnimada2,
        }}
      >
        <Text style={styles.articleText}>Carregando...</Text>
      </Animated.View>
      
      {/* parallel */}
      <Animated.View 
        style={{
          width: larguraAnimada3,
          height: alturaAnimada3,
          backgroundColor: "#f79e2b",
          justifyContent: "center",
          marginTop: 15,
          opacity: opcidadeAnimada3,
        }}
      >
        <Text style={styles.articleText}>Carregando...</Text>
      </Animated.View>

      {/* parallel */}
      <Animated.View 
        style={{
          width: larguraAnimada4,
          height: alturaAnimada4,
          backgroundColor: "#b62bf7",
          justifyContent: "center",
          marginTop: 15,
          opacity: opcidadeAnimada4,
        }}
      >
        <Text style={styles.articleText}>Carregando...</Text>
      </Animated.View>
    
    </View>
  );
}