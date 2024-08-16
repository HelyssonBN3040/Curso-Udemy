import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Filmes from './src/Filmes/Filmes';


export default function App() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/r-api/?api=filmes'
  })


  async function requisicao() {
    const res = await api.get('/')
    setFilmes(res.data)
    setLoading(false)
  }

  useEffect(() => {
    requisicao()
  }, [])


  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator
          color="#09a6ff"
          size={40}
        />
        <Text>Carregando...</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <FlatList
          data={filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Filmes data={item} />}
        />
       
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45
  },
});
