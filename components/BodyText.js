import React from "react";
import { StyleSheet, Text } from "react-native";

const BodyText = (props) => {
    return (
        <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
    );
};

export default BodyText;

const styles = StyleSheet.create({
    body: {
        fontFamily: "open-sans",
    },
});
