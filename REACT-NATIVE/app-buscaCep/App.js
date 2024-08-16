import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import axios from 'axios';

export default function App() {
  const [cep, setCep] = useState('')
  const limparTeclado = useRef(null)
  const [userCep, setUserCep] = useState(null)

  const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
  })

  async function buscar() {
    if (cep === '') {
      alert("Digite um cep valido")
      setCep('')
      return
    }
    try {
      const res = await api.get(`/${cep}/json`)
      console.log(res.data)
      setUserCep(res.data)
      Keyboard.dismiss()
    }
    catch (error) {
      console.log(`Erro: ${error}`)
    }
  }

  function limpar() {
    setCep('')
    limparTeclado.current.focus()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Title}>Digite o CEP desejado</Text>
      <TextInput
        style={styles.input}
        placeholder='Ex: 69000000'
        keyboardType='numeric'
        value={cep}
        onChangeText={(value) => setCep(value)}
        ref={limparTeclado}
      />
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#1371D2" }]}
          onPress={buscar}
        >
          <Text style={styles.textButton}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#DD562A" }]}
          onPress={limpar}
        >
          <Text style={styles.textButton}>Limpar</Text>
        </TouchableOpacity>

      </View>
      {userCep &&
        <View style={styles.resultCep}>
          <Text style={styles.textCep}>CEP: {userCep.cep}</Text>
          <Text style={styles.textCep}>Logradouro: {userCep.logradouro}</Text>
          <Text style={styles.textCep}>Bairro:  {userCep.bairro}</Text>
          <Text style={styles.textCep}>Cidade: {userCep.localidade}</Text>
          <Text style={styles.textCep}>Estado: {userCep.uf}</Text>
        </View>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "10%"
  },
  input: {
    width: "100%",
    borderWidth: 1,
    padding: 7,
    borderRadius: 4,
    marginTop: 15
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20
  },
  button: {
    display: "flex",
    width: 100,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    fontSize: 20,
    color: "white"
  },
  resultCep: {
    marginVertical: "auto",
    alignItems: "center"
  },
  textCep: {
    fontSize: 20
  }

});
