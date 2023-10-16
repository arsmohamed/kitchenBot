import { Text, View, Pressable, Image, StyleSheet } from 'react-native';

export default function NavigationBar() {
    return (
        <View style={navBarStyles.NavContainer}>
            <View style={navBarStyles.NavBar}>
                <Pressable style={navBarStyles.IconBehave}>
                    <Image source={require('../../../../assets/navBar/chat.png')} />
                </Pressable>
                <Pressable style={navBarStyles.IconBehave}>
                    <Image source={require('../../../../assets/navBar/basket.png')} />
                </Pressable>
                <Pressable style={navBarStyles.IconBehave}>
                    <Image source={require('../../../../assets/navBar/calendar.png')} />
                </Pressable>
                <Pressable style={navBarStyles.IconBehave}>
                    <Image source={require('../../../../assets/navBar/save.png')} />
                </Pressable>
                <Pressable style={navBarStyles.IconBehave}>
                    <Image source={require('../../../../assets/navBar/gear.png')} />
                </Pressable>
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
    }
  });
  