import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function About() {
  const navigation = useNavigation()
  function navega(){
    navigation.navigate('Contact', {
      nome: "Helysson",
      email: "helysson@teste.com.br"
    })
  }

  return (
    <View style={styles.container}>
        <Text>Pagina sobre</Text>
        <Button
          title='Pagina de contato'
          onPress={navega}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: "center",
  alignItems:"center"
  },
});
