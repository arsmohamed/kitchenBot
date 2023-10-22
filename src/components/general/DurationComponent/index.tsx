import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface CustomDurationProps {
  StartTime: number;
  EndTime: number;
}

const Duration: React.FC<CustomDurationProps> = ({ StartTime, EndTime }) => {
  if (StartTime > EndTime) {
    // You can throw an error, log it, or handle it as needed
    console.error('Start time cannot be greater than end time.');
    // You can also return null or a message in the UI instead of throwing an error
    return null;
  }
  return (
    <View style={DurationStyle.DurationContainer}>
      <Image source={require('../../../../assets/clock.png')} />
      <Text style={DurationStyle.TextStyle}>
        {StartTime} - {EndTime} min
      </Text>
    </View>
  );
};

const DurationStyle = StyleSheet.create({
  DurationContainer: {
    height: 25,
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#808080',
  },
  TextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'nunito',
    color: 'white',
    marginLeft: 10,
  },
});

export default Duration;
