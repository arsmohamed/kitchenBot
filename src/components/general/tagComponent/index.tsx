import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
//interface for the props that customComponent

interface TagComponentProps {
  //Container
  height: number;
  backgroundColor: string;
  //Text
  textColor: string;
  //Children Text
  name: string;
  onClick: (name: string) => void; // Add the onClick prop
}
/* React.FC is a TypeScript type alias that stands for React Function Component "
    used to define the type of functional component in React when working with TypeScript" */
const TagComponent: React.FC<TagComponentProps> = ({
  height,
  backgroundColor,
  textColor,
  name,
  onClick,
}) => {
  const [isCloseClicked, setIsCloseClicked] = useState(false);
  const toggleCloseIcon = () => {
    console.log(isCloseClicked);
    setIsCloseClicked(!isCloseClicked);
    if (isCloseClicked) {
      onClick(name);
    }
  };
  //Container Styling
  const borderRadius = height * 0.45;
  const containerStyle = {
    height,
    backgroundColor,
    borderRadius,
  };
  const textStyle = {
    color: textColor,
  };
  //CloseIcon
  const tagComponent = (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{name}</Text>
      <TouchableWithoutFeedback onPress={toggleCloseIcon}>
        <Icon name="close" size={'24'} color="white" />
      </TouchableWithoutFeedback>
    </View>
  );
  //returned Container
  return tagComponent;
};

export default TagComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: 'auto',
    padding: 5,
  },
  text: {
    color: 'white',
    textSize: 12,
    marginLeft: 10,
  },
});
