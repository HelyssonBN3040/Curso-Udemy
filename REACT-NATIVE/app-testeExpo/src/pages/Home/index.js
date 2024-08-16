import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { TouchableOpacity, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Button title='Ir para sobre' onPress={() => navigation.navigate('About')} />
            <Button title='Abrir Drawer' onPress={() => navigation.openDrawer()} />
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            <TextInput/>
            <TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"red",
        
    },
});
