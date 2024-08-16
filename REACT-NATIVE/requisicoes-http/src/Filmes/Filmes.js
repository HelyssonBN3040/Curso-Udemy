import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function Filmes({ data }) {
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image
                    source={{ uri: data.foto }}
                    style={styles.capa}
                />
            </View>
            <View style={styles.AreaBotao}>
                <TouchableOpacity style={styles.botao} onPress={()=> alert(data.nome)}>
                    <Text style={styles.botaoText}>Leia Mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        backgroundColor: "#fff",
        shadowOffset:{width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3
    },
    titulo: {
        fontSize: 18,
        padding: 15
    },
    capa: {
        height: 250,
        zIndex: 2
    },
    AreaBotao:{
        alignItems: "flex-end",
        marginTop: -50,
        marginRight: 15,
        zIndex: 9
    },
    botao:{
        width: 100,
        backgroundColor: "#09a6ff",
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5

    } ,
    botaoText:{
        textAlign: "center",
        color: "white"
    }  
});
