import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tag from './src/components/general/tagComponent/index';
import Input from './src/components/general/textInputComponent/index';
import CustomSearchComponent from './src/components/general/searchInputComponent/indes';
import NavigationBar from './src/components/general/navigationBarComponent/index';

export default function App() {
  // State to manage the input value
  const [InputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* <CustomSearchComponent
        placeholder="Search Recipe "
        onChangeText={(text) => console.log(`Search query: ${text}`)}
      /> */}
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
