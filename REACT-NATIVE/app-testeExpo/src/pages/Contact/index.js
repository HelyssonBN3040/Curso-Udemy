import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import { useRoute, useNavigation, StackActions } from '@react-navigation/native';

export default function Contact() {
    const route = useRoute()
    const navigation = useNavigation()

    function handleHome() {
        navigation.dispatch(StackActions.popToTop())
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.nome === '' ? "Pagina de Contato" : route.params?.nome
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <Text>Pagina de contato</Text>
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.email}</Text>
            <Button
                title='Voltar ao home'
                onPress={handleHome}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
