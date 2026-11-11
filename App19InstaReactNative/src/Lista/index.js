import React, {Component} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

class Lista extends Component{
    constructor(props){
        super(props);

        this.state = {
            feed: this.props.data
        }

        this.mostraLikes = this.mostraLikes.bind(this);
        this.curtir = this.curtir.bind(this);
        this.carregaIcone = this.carregaIcone.bind(this);
    }

    mostraLikes(likers){
        let feed = this.state.feed;

        if(feed.likers <= 0){
            return;
        }

        return(
            <Text style={styles.likes}>
                {feed.likers} {feed.likers > 1 ? "curtidas": "curtida"}
            </Text>
        );
    }

    curtir(){
        let feed = this.state.feed;

        if(feed.likeada == true){
            this.setState({
                feed:{
                    ...feed, //pega tudo o que já tem e mantém
                    likeada: false,
                    likers: feed.likers-1
                }
            });
        }
        else{
            this.setState({
                feed:{
                    ...feed, //pega tudo o que já tem e mantém
                    likeada: true,
                    likers: feed.likers+1
                }
            });
        }
    }

    carregaIcone(likeada){
        return likeada ? require("../img/likeada.png") : require("../img/like.png");
    }

    render(){
        return(
            <View style={styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image 
                        source={{uri: this.state.feed.imgperfil}}
                        style={styles.fotoPerfil}
                    />

                    <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
                </View>

                <Image
                    source={{uri: this.state.feed.imgPublicacao}}
                    style={styles.fotoPublicacao}
                />

                <View style={styles.areaIcones}>
                    <TouchableOpacity onPress={this.curtir}>
                        <Image 
                            source={this.carregaIcone(this.state.feed.likeada)}
                            style={styles.iconLike}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSend}>
                        <Image 
                            source={require("../img/send.png")}
                            style={styles.iconLike}
                        />
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>{this.state.feed.nome}</Text>
                    <Text style={styles.descRodape}>{this.state.feed.descricao}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaFeed:{

    },

    nomeUsuario:{
        fontSize: 22,
        textAlign: "left",
        color: "#000",

    },

    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius:25,
    },

    fotoPublicacao:{
        width: "100%",
        height: 400, 
        resizeMode: "cover" // encaixa a foto como se fosse uma capa
    },

    viewPerfil:{
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        padding: 8,
        gap: 10
    },

    areaIcones:{
        flexDirection: "row",
        padding: 5,
        justifyContent: "space-between",
    },

    iconLike:{
        width: 33,
        height: 33
    },

    btnSend:{
        paddingLeft: 5
    },

    viewRodape:{
        flexDirection: "row",
        alignItems: "center",
    },

    descRodape:{
        paddingLeft: 5,
        fontSize: 15,
    },

    nomeRodape:{
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 5
    },

    likes:{
        paddingLeft: 5,
        fontWeight: "bold"
    }

    
});

export default Lista;