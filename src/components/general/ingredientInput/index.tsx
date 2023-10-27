import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import AddIcon from 'react-native-vector-icons/Ionicons';

interface Ingredient {
  amount: string;
  unit: string;
  type: string;
}

const IngredientInputComponent = () => {
  // Const state section
  const [amount, setAmount] = useState<string>(''); // State for amount
  const [unit, setUnit] = useState<string>(''); // State for unit
  const [type, setType] = useState<string>(''); // State for type
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>(''); // State to display error message

  // Function to handle text input changes
  const handleAmountChange = (text: string) => setAmount(text);
  const handleUnitChange = (text: string) => setUnit(text);
  const handleTypeChange = (text: string) => setType(text);

  // Function to handle icon click and remove the corresponding ingredient
  const handleIconClick = (index: number) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  // Function to handle "Add" button click
  const handleAddClick = () => {
    if (!amount || !unit || !type) {
      setErrorMessage('Please enter a value in all fields.');
    } else {
      const newIngredient: Ingredient = { amount, unit, type };
      setIngredients([...ingredients, newIngredient]);
      setAmount('');
      setUnit('');
      setType('');
      setErrorMessage('');
    }
  };

  //Const for the views
  const IngredientContainer = (
    <View style={IngredientInputStyle.IngredientContainerStyle}>
      <TextInput
        style={IngredientInputStyle.NumberContainerStyle}
        placeholder="Amount"
        value={amount}
        onChangeText={handleAmountChange}
      />
      <TextInput
        style={IngredientInputStyle.UnitContainerStyle}
        placeholder="Unit"
        value={unit}
        onChangeText={handleUnitChange}
      />
      <TextInput
        style={IngredientInputStyle.TypeContainerStyle}
        placeholder="Item"
        value={type}
        onChangeText={handleTypeChange}
      />
    </View>
  );
  //Const for the views each ingredient
  const IngredientView = ({
    ingredient,
    index,
  }: {
    ingredient: Ingredient;
    index: number;
  }) => (
    <View style={IngredientInputStyle.IngredientContainerStyle}>
      <Text style={IngredientInputStyle.NumberContainerStyle}>
        {ingredient.amount}
      </Text>
      <Text style={IngredientInputStyle.NumberContainerStyle}>
        {ingredient.unit}
      </Text>
      <Text style={IngredientInputStyle.NumberContainerStyle}>
        {ingredient.type}
      </Text>
      <TouchableOpacity onPress={() => handleIconClick(index)}>
        <Icon name="close" size={28} color="grey" />
      </TouchableOpacity>
    </View>
  );

  const Container = (
    <View style={IngredientInputStyle.ContainerStyle}>
      {ingredients.map((ingredient, index) => (
        <IngredientView key={index} ingredient={ingredient} index={index} />
      ))}
      {IngredientContainer}

      <AddIcon
        name="add-circle-outline"
        size={32}
        color="#B4436C"
        onPress={handleAddClick}
      />
      {errorMessage ? (
        <Text style={{ color: 'red' }}>{errorMessage}</Text>
      ) : null}
    </View>
  );

  return Container;
};

const IngredientInputStyle = StyleSheet.create({
  ContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
    rowGap: 10,
  },
  IngredientContainerStyle: {
    flexDirection: 'row',
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
  InputStyle: {
    height: 40,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});

export default IngredientInputComponent;
