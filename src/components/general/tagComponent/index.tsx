import React from "react";
import {View, Text} from "react-native";
import styles from "./styles";

//interface for the props that customComponent

interface customComponentProps {
    //Container 
    width: number;
    height: number;
    backgroundColor: string;
    borderRadius: number;
    //Text
    textColor: string;
    textSize: number;
    fontFamily: string;
    //Children Text
    name: string
}
/* React.FC is a TypeScript type alias that stands for React Function Component "
    used to define the type of functional component in React when working with TypeScript" */
const CustomComponent: React.FC<customComponentProps> = ({ 
  width,
  height,
  backgroundColor,
  borderRadius,
  textColor,
  textSize,
  fontFamily,
  name
}) => {
    const containerStyle = {
        width, 
        height,
        backgroundColor,
        borderRadius,
    }
    const textStyle = {
        color: textColor,
        fontSize: textSize,
        fontFamily: fontFamily
    }
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.text, textStyle]}>{name}</Text>
        </View>
    )

}

export default CustomComponent;