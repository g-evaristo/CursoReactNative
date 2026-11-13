import { Component } from "react";
import { View, Text, Button } from "react-native";

import styles from './style';

class App extends Component{
    render(){
        return(
            <View style={styles.fundoModal}>
                <Text style={styles.textoBranco}>Seja bem-vindo!</Text>
                <Button title="Fechar" onPress={ () => this.props.fechar(false) }></Button>
            </View>
        );
    }
}

export default App;