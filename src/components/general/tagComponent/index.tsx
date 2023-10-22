import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
//interface for the props that customComponent

interface TagComponentProps {
  // height: number;
  backgroundColor: string;
  textColor: string; //Text
  name: string; //Children Text
  onClick: (name: string) => void; // Add the onClick prop
  isActive: boolean; // New prop to determine the active state
}

const TagComponent: React.FC<TagComponentProps> = ({
  // height,
  backgroundColor,
  textColor,
  name,
  isActive,
  onClick,
}) => {
  const [isCloseClicked, setIsCloseClicked] = useState(false);

  const toggleCloseIcon = () => {
    console.log(isCloseClicked);
    if (isActive) {
      setIsCloseClicked(!isCloseClicked);
      if (isCloseClicked) {
        onClick(name);
      }
    }
  };
  //Container Styling
  // const borderRadius = height * 0.45;
  const containerStyle = {
    // height,
    backgroundColor,
    // borderRadius,
  };
  const textStyle = {
    color: textColor,
  };
  //CloseIcon
  const tagComponent = (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{name}</Text>
      {isActive && (
        <TouchableWithoutFeedback
          onPress={toggleCloseIcon}
          disabled={!isActive}
        >
          <Icon name="close" size={24} color="white" />
        </TouchableWithoutFeedback>
      )}
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
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 45,
  },
  text: {
    color: 'white',
    textSize: 12,
    fontWeight: 'bold',
  },
});
