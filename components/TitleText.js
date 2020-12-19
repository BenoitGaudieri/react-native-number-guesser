import React from "react";
import { StyleSheet, Text } from "react-native";

const TitleText = (props) => {
    return (
        <Text style={{ ...styles.title, ...props.style }}>
            {props.children}
        </Text>
    );
};

export default TitleText;

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
    },
});
