import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface CustomSearcgInputProps {
  placeholder: string;
  onChangeText: (name: string) => void;
}

const CustomSearchComponent: React.FC<CustomSearcgInputProps> = ({
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

export default CustomSearchComponent;
