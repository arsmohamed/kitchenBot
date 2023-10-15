import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
//interface for the props that customComponent

interface customComponentProps {
    //Container 
    height: number;
    backgroundColor: string;
    //Text
    textColor: string;
    textSize: number;
    //Children Text
    name: string;
    //close icon size 
    CloseSize: number;
}
/* React.FC is a TypeScript type alias that stands for React Function Component "
    used to define the type of functional component in React when working with TypeScript" */
const CustomComponent: React.FC<customComponentProps> = ({ 
    height,
    backgroundColor,
    textColor,
    textSize,
    name,
    CloseSize
}) => {
    const [isCloseClicked, setIsCloseClicked] = useState(false);
    const toggleCloseIcon = () => {
        console.log(isCloseClicked)
        setIsCloseClicked(!isCloseClicked);
      };
    //Container Styling 
    const borderRadius = (height * 0.45);
    const containerStyle = {
        height,
        backgroundColor,
        borderRadius
    }
    const textStyle = {
        color: textColor,
        fontSize: textSize,
    }
    //CloseIcon
    const tagComponent = <View style={[styles.container, containerStyle]}>
            <Text style={[styles.text, textStyle]}>{name}</Text>
            <Icon name="close" size={CloseSize} color="white" onPress={toggleCloseIcon}/>
        </View>
    //returned Container
    return tagComponent
}

export default CustomComponent;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center', 
      alignContent: 'center',
      width: 'auto',
      padding: 5,
    },
    text: {
      color: 'white',
    },
  });