import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: "#FFFFFF",
        // shadow option not working on android. Must use elevation.
        elevation: 5,
        padding: 10,
        borderRadius: 10,
    },
});
