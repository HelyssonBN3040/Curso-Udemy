## Passos para usar react-native-vector-icons com Expo
# 1. Criar um novo projeto Expo
##### Se você ainda não criou um projeto Expo, você pode fazer isso usando o comando abaixo:

```
bash
expo init MyProject
cd MyProject
```
# 2. Instalar a biblioteca
Como mencionei anteriormente, a biblioteca react-native-vector-icons já vem pré-configurada com Expo, então você só precisa instalá-la:

### bash
```
expo install react-native-vector-icons
```
# 3. Utilizar ícones no seu projeto
Aqui está um exemplo simples de como usar ícones do Material Icons no seu projeto Expo:

App.js
```

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu Ícone:</Text>
      <MaterialIcons name="home" size={50} color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```