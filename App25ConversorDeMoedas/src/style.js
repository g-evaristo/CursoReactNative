import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#101215",
        paddingTop: 40,
        alignItems: "center",
    },
    areaMoeda:{
        backgroundColor: "#f9f9f9",
        width: "90%",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 8,
        marginBottom: 1
    },
    titulo:{
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
        paddingLeft: 5,
        paddingTop: 5
    },
    loading:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#101215",
    },
    picker:{
        marginTop: 10, 
        padding: 15, 
        fontSize: 15
    },
    areaValor:{
        width: "90%",
        backgroundColor: "#f9f9f9",
        paddingTop: 8,
        paddingBottom: 8,
    },
    input:{
        width: "95%",
        padding: 8,
        fontSize: 18,
        color: "#000",
        margin: 8,
        borderColor: "#000",
        borderWidth: 1,
    },
    botaoArea:{
        width: "90%",
        backgroundColor: "#FB4b57",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    botaoText:{
        color: "#000",
        fontWeight: "bold",
        fontSize: 16
    },
    areaResultado:{
        width: "90%",
        backgroundColor: "#FFF",
        marginTop: 34,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        padding: 24
    },
    valorConvertido:{
        fontSize: 28,
        color: "#000",
        fontWeight: "bold"
    },
    textoValorConvertido:{
        fontSize: 18,
        color: "#000",
    }
});

export default styles;