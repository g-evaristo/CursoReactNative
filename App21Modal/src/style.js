import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
    },

    fundoModal:{
        backgroundColor: '#292929',
        width: '100%',
        height: 350,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoBranco:{
        color: "#FFF",
        fontSize: 28,
    },

    estiloModal:{
        margin: 15,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default styles;