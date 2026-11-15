/*
Exemplo: se o álcool custa R$ 3.29 e a gasolina R$ 4.92, o resultado
da divisão do primeiro pelo segundo é menor que 0.7. Portanto, é
mais vantajoso abastecer com álcool.
*/
import { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from './style';

class Escolha extends Component{
    render(){
        let valorResultado = Number(this.props.precoAlcool)/Number(this.props.precoGasolina);

        if(valorResultado <= 0.7){
            return(
                <Text style={[styles.textoBranco, styles.alcool]}>Compensa usar Álcool</Text>
            );
        }
        else{
            return(
                <Text style={[styles.textoBranco, styles.gasolina]}>Compensa usar Gasolina</Text>
            );
        }
    }
}

class App extends Component{
    render(){
        return(
            <View style={styles.fundoModal}>
                <Image
                    source={require('./gas.png')}
                />

                <Escolha 
                    precoAlcool={this.props.precoAlcool}
                    precoGasolina={this.props.precoGasolina}
                />

                <Text style={styles.textoBranco}>Com os preços:</Text>
                <Text style={[styles.textoBranco, styles.textoPequeno]}>Álcool: R$ {Number(this.props.precoAlcool).toFixed(2)}</Text>
                <Text style={[styles.textoBranco, styles.textoPequeno]}>Gasolina: R$ {Number(this.props.precoGasolina).toFixed(2)}</Text>

                <TouchableOpacity style={styles.botaoComBorda} onPress={ () => this.props.fechar(false) }>
                    <View>
                    <Text style={styles.btnTextoVermelho}>Calcular Novamente</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default App;