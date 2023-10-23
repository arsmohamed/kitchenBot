import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

interface IngredientFormProps {
  Type: string;
  Amount: number;
  Ingredient: string;
}

const IngredientInputForm: React.FC<IngredientFormProps> = ({
  Type,
  Amount,
  Ingredient,
}) => {
  const [isClosed, setIsClosed] = useState<boolean>(false);

  const FormContainer = (
    <View style={IngredientFormStyle.FormContainerStyle}>
      <View style={IngredientFormStyle.UnitContainerStyle}>
        <Text style={IngredientFormStyle.TextStyle}>{Amount}</Text>
      </View>
      <View style={IngredientFormStyle.NumberContainerStyle}>
        <Text style={IngredientFormStyle.TextStyle}>{Type}</Text>
      </View>
      <View style={IngredientFormStyle.TypeContainerStyle}>
        <Text style={IngredientFormStyle.TextStyle}>{Ingredient}</Text>
      </View>
      <TouchableOpacity onPress={() => setIsClosed(true)}>
        <Icon name="close" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
  return FormContainer;
};

const IngredientFormStyle = StyleSheet.create({
  FormContainerStyle: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    columnGap: 10,
  },
  NumberContainerStyle: {
    height: 40,
    width: 70,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  UnitContainerStyle: {
    height: 40,
    width: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TypeContainerStyle: {
    height: 40,
    width: 160,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    textAlign: 'center',
  },
});

export default IngredientInputForm;
