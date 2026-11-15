import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#3c3c3c",
        color: "#FFF",
        alignItems: "center",
        justifyContent: "center"
    },
    
    titulo:{
        color: "#FFFFFF",
        fontSize: 28,
        margin: 20,
    },

    input:{
        padding: 20,
        width: '80%',
        color: "#3c3c3c",
        fontSize: 20,
        backgroundColor: '#FFFFFF', 
        borderRadius: 8,
        margin: 10,
    },

    botao:{
        padding: 20,
        width: '80%',
        backgroundColor: '#ef4130', 
        borderRadius: 8,
        margin: 10,
    },

    botaoComBorda:{
        padding: 20,
        width: '80%',
        backgroundColor: '#3c3c3c', 
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#ef4130', 
        margin: 10,
    },

    btnTexto:{
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 20,
    },

    btnTextoVermelho:{
        textAlign: "center",
        color: "#ef4130",
        fontSize: 20,
    },

    fundoModal:{
        backgroundColor: '#3c3c3c',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoBranco:{
        color: "#FFF",
        fontSize: 28,
        padding: 10
    },

    estiloModal:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    textoPequeno:{
        fontSize: 20
    },

    alcool:{
        color: "#00FF00"
    },

    gasolina:{
        color: "#ef4130"
    }
});

export default styles;