import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = (props) => {
    // get the options and the style from the props
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

export default Input;

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: "#f1f1f1",
        borderBottomWidth: 1,
        marginVertical: 10,
    },
});
