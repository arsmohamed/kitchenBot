import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

interface IngredientInputProps {
  Amount: number;
  Type: string;
}

const IngredientInputComponent = () => {
  const ViewContainer = (
    <View style={IngredientInputStyle.ViewContainerStyle}>
      <TextInput
        style={IngredientInputStyle.NumberContainerStyle}
        placeholder="Number"
      />
      <TextInput
        style={IngredientInputStyle.UnitContainerStyle}
        placeholder="Unit"
      />
      <TextInput
        style={IngredientInputStyle.TypeContainerStyle}
        placeholder="Text"
      />
      <Icon name="close" size={28} color="grey" />
    </View>
  );

  return ViewContainer;
};

const IngredientInputStyle = StyleSheet.create({
  ViewContainerStyle: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    columnGap: 10,
  },
  NumberContainerStyle: {
    height: 40,
    width: 70,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  UnitContainerStyle: {
    height: 40,
    width: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  TypeContainerStyle: {
    height: 40,
    width: 160,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});

export default IngredientInputComponent;
