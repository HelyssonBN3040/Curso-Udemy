import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Image } from 'react-native';


export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [valueAl, setValueAl] = useState()
  const [valueGas, setValueGas] = useState()

  const result = valueAl / valueGas

  function PressButton(value) {
    setIsOpen(value)
    if (value == false) {
      setValueAl()
      setValueGas()
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ alignItems: "center" }}>
        <Image
          source={require('./assets/logo.png')}
        />
      </View>
      <Text style={{ color: "white", fontSize: 24, textAlign: "center", fontWeight: "bold", marginVertical: 50 }}>Qual melhor opção?</Text>
      <View>
        <Text style={styles.TextValue}>Álcool (preço por litro): </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setValueAl(value)}
          value={valueAl}
          keyboardType='numeric'
        />
        <Text style={styles.TextValue}>Gasolina (preço por litro): </Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(value) => setValueGas(value)}
          value={valueGas}
        />
        <TouchableOpacity
          style={styles.btnCalc}
          onPress={() => PressButton(true)}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Calcular</Text></TouchableOpacity>
      </View>
      <Modal transparent={true} animationType='slide' visible={isOpen}>
        <View style={styles.containerModal}>
          <Image
            source={require('./assets/gas.png')}
          />
          <Text style={{ fontSize: 27, fontWeight: "bold", color: "#2DD466", textAlign: "center" }}>Compensa usar {result < 0.7 ? "Álcool" : "Gasolina"}</Text>
          <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", textAlign: "center" }}>Com os preços:</Text>
            <Text style={styles.textResult}>Álcool: R$ {valueAl}</Text>
            <Text style={styles.textResult}>Gasolina: R$ {valueGas}</Text>
          </View>
          <TouchableOpacity
            style={styles.btnModal}
            onPress={() => PressButton(false)}
          >
            <Text style={{ color: "#FF512E" }}>Calcular novamente</Text></TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#212121",
    justifyContent: "center",
  },
  TextValue: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 15
  },
  input: {
    height: 40,
    marginTop: 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5
  },
  btnCalc: {
    width: "100%",
    backgroundColor: "#FF512E",
    height: 50,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  containerModal: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
    gap: 40
  },
  textResult: {
    color: "white",
    textAlign: "center"
  },
  btnModal: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 30,
    borderWidth: 1,
    borderColor: "#FF512E",
    borderRadius: 5

  }
});
