import React, { useState } from 'react';
import { TextInput, ViewStyle, TextStyle, StyleSheet } from 'react-native';

interface CustomTextInputProps {
  placeholder: string; 
  onChangeText: (name: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  onChangeText,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.input}
      placeholderTextColor="#999" // Customize the placeholder text color
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 'auto',
    borderBottomWidth: 1,
  },
});

export default CustomTextInput;
