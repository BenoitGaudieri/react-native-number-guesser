import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
} from "react-native";
import colors from "../constants/colors";

const MainButton = (props) => {
    // capital character so JSX can use it as a component
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </ButtonComponent>
    );
};

export default MainButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },

    buttonText: {
        color: "white",
        fontFamily: "open-sans",
        fontSize: 18,
    },
});
