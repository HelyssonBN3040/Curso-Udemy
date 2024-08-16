import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  const [limit, setLimit] = useState(10)

  function contadorRestaurante(count) {
    if (count <= 0) return

    if (count >= limit) {
      setCount(10)
      return
    }
    setCount(count)
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 25 }}>Pessoas no restaurante</Text>
      <View style={{ backgroundColor: "black", width: 60, height: 65, justifyContent: "center", alignItems: "center", borderRadius: 8 }}>
        <Text style={{ fontSize: 30, color: "white" }}>{count}</Text>
      </View>
      {
        count >= limit && <Text style={{ backgroundColor: "#F8AF32", padding: 5 }}>
          Restaurante está no seu limite de pessoas.
        </Text>
      }
      <View style={{ width: "100%", justifyContent: "space-evenly", flexDirection: "row" }}>
        <Pressable
          style={[styles.input, count >= limit && {backgroundColor: "#ddd"}]}
          onPress={() => contadorRestaurante(count + 1)}
        >
          <Text style={styles.textInput}>Adicionar</Text>
        </Pressable>
        <Pressable
          style={[styles.input, count === 0 && {backgroundColor: "#ddd"}]}
          onPress={() => contadorRestaurante(count - 1)}
        >
          <Text style={styles.textInput}>Remover</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },
  input: {
    backgroundColor: "#027AFE",
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  textInput: {
    fontSize: 20,
    color: "white"
  }
});
