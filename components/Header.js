import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props) => {
    return (
        <View
            style={{
                ...styles.headerBase,
                ...Platform.select({
                    ios: styles.headerIOS,
                    android: styles.headerAndroid,
                }),
            }}
        >
            <TitleText style={styles.title}>{props.title}</TitleText>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        alignItems: "center",
        justifyContent: "center",
        // check the OS and display a different color if not android
        // backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
        // borderBottomColor: Platform.OS === "ios" ? "#ccc" : "white",
        // borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
    },

    // best practice
    headerIOS: {
        backgroundColor: "white",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },

    headerAndroid: {
        backgroundColor: Colors.primary,
        borderBottomColor: "white",
        borderBottomWidth: 0,
    },

    title: {
        color: Platform.OS === "ios" ? Colors.primary : "white",
    },
});

export default Header;
