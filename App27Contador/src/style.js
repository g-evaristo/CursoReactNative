import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titulo:{
        fontSize: 25,
        fontWeight: "bold",
    },
    bloco:{
        backgroundColor: "#000",
        marginTop: 20,
        height: 80,
        width: 80,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    blocoText:{
        color: "#FFF",
        fontSize: 50,
        fontWeight: "bold"
    },
    areaBotao:{
        alignItems: "center",
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "space-around"
    },
    btn:{
        height: 50,
        padding: 10,
        backgroundColor: "#007AFE",
        borderRadius: 10, 
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    btnText:{
        color: "#FFF",
        fontSize: 20,
    },
    btnDisabled:{
        backgroundColor: "#d3d3d3",
    },
    areaMensagem:{
        backgroundColor: "#F6B230",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    areaMensagemText:{
        fontSize: 15,
        fontWeight: "bold"
    }
});

export default styles;