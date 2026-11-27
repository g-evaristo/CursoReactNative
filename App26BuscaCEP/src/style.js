import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    main:{
        alignItems: "center"
    },
    text:{
        marginTop: 25,
        marginBottom: 15,
        fontSize: 25,
        fontWeight: "bold"
    },
    input:{
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        width: "90%",
        padding: 15,
        fontSize: 18
    },
    areaBtn:{
        alignItems: "center",
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "space-around"
    },
    botao:{
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 5,
    },
    botaoText:{
        fontSize: 22,
        color: "#FFF"
    },
    azul:{
        backgroundColor: "#008CD3"
    },
    vermelho:{
        backgroundColor: "#cd3e1d"
    },
    resultado:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    itemText:{
        fontSize: 22
    }
});

export default styles;