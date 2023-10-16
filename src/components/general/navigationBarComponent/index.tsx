import { View, Pressable, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const NavigationBar = ()=> {
    const [selectedIcon, setSelectedIcon] = useState("calendar");

    const iconData = [
        { iconName: 'chat', imageSource: require('../../../../assets/navBar/chat.png') },
        { iconName: 'basket', imageSource: require('../../../../assets/navBar/basket.png') },
        { iconName: 'calendar', imageSource: require('../../../../assets/navBar/calendar.png') },
        { iconName: 'save', imageSource: require('../../../../assets/navBar/save.png') },
        { iconName: 'gear', imageSource: require('../../../../assets/navBar/gear.png') },
      ];

    const selectIcon = (iconName: string) => {
        setSelectedIcon(iconName)
    }

    return (
        <View style={navBarStyles.NavContainer}>
      <View style={navBarStyles.NavBar}>
        {iconData.map((icon, index) => (
          <Pressable
            key={index}
            onPress={() => selectIcon(icon.iconName)}
            style={navBarStyles.IconBehave}
            android_ripple={{ borderless: true, radius: 30 }}
          >
            {selectedIcon === icon.iconName && <Image style={navBarStyles.IconSelected} source={require('../../../../assets/navBar/selected.png')} />}
            <Image source={icon.imageSource} />
          </Pressable>
        ))}
      </View>
    </View>
    )
}

const navBarStyles = StyleSheet.create({
    NavContainer: {
        position: "absolute",
        alignItems: "center",
        bottom: 20,
        },
    NavBar: {
        flexDirection: "row",
        backgroundColor: "#eee",
        width: "95%",
        justifyContent: "space-evenly",
        borderRadius: 40
    },
    IconBehave: {
        padding: 14
    },
    IconSelected: {
        position:"absolute",
        padding: 30
    }
  });
  
export default NavigationBar;
