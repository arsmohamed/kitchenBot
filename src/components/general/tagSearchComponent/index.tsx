import React, { useState } from 'react';
import Tag from '../tagComponent/index';
import {
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
} from 'react-native';

const TagSearchComponent: React.FC = () => {
  //state Input section
  const [inputText, setInputText] = useState<string>('');
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);
  //handling on press section
  const handleButtonPress = () => {
    if (!buttonPressed) {
      // Save the input text and return to the original state
      setTags([...tags, inputText]);
      setInputText('');
      setButtonPressed(false);
    } else {
      setButtonPressed(true);
    }
  };
  const TagSearch = (
    <View style={ContainerStyle.Vcontainer}>
      <TextInput
        style={ContainerStyle.input}
        placeholder="Tag Search"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <TouchableWithoutFeedback onPress={handleButtonPress}>
        <View style={ContainerStyle.addButton}>
          <Image source={require('../../../../assets/add.png')} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
  const TagView = (
    <ScrollView style={ContainerStyle.TagContainer}>
      <View style={ContainerStyle.tagRow}>
        {tags.map((tag, index) => (
          <Tag
            backgroundColor="#34A853"
            textColor="white"
            name={tag}
            onClick={() => console.log('clicked')}
            isActive={false}
            key={index}
          />
        ))}
      </View>
    </ScrollView>
  );
  return (
    <View style={ContainerStyle.Hcontainer}>
      {TagSearch}
      {TagView}
    </View>
  );
};

const ContainerStyle = StyleSheet.create({
  Hcontainer: {
    width: '90%',
    marginRight: 20,
    marginLeft: 20,
  },
  Vcontainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  TagContainer: {
    maxHeight: 50,
    padding: 10,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
});

export default TagSearchComponent;
