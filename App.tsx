import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tag from './src/components/general/tagComponent/index';
import Input from './src/components/general/textInputComponent/index';
import NavigationBar from './src/components/general/navigationBarComponent/index';
import Ingredient from './src/components/general/ingredientInput/index';
export default function App() {
  // State to manage the input value
  const [InputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Ingredient />
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
