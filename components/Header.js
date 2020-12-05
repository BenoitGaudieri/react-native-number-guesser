import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: "#78E3FD",
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        color: "black",
        fontSize: 18,
    },
});

export default Header;
