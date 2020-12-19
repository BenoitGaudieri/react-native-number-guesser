import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props) => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.title}>{props.title}</TitleText>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Header;
