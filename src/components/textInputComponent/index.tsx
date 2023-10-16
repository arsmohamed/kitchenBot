import React, { useState } from 'react';
import { TextInput, ViewStyle, TextStyle, StyleSheet } from 'react-native';

interface CustomTextInputProps {
  text: string;
  placeholder: string;
//   style: {
//     container?: ViewStyle;
//     input?: TextStyle;
//   };
  onChangeText: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  text,
  placeholder,
  style,
  onChangeText,
}) => {
  return (
    <TextInput
      value={text}
      placeholder={placeholder}
      style={[styles.input, style.container]}
      placeholderTextColor="#999" // Customize the placeholder text color
      onChangeText={onChangeText}
      style={[styles.input, style.input]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 'auto',
    borderBottomWidth: 1,
  },
});

export default CustomTextInput;
