import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Input from './src/components/general/textInputComponent/index';
import CustomSearchComponent from './src/components/general/searchInputComponent/indes';
import NavigationBar from './src/components/general/navigationBarComponent/index';
import TagSearch from './src/components/general/tagSearchComponent/index';
import Duration from './src/components/general/DurationComponent/index';
import Ingredient from './src/components/general/ingredientInput/index';

export default function App() {
  // State to manage the input value
  const [InputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TagSearch />
      <Duration StartTime={40} EndTime={50} />

      {/* <CustomSearchComponent
        placeholder="Search Recipe "
        onChangeText={(text) => console.log(`Search query: ${text}`)}
      /> */}
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
