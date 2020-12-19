import React from "react";
import { Button, StyleSheet, View, Text, Image } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOver = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    // fadeDuration={1000}
                    // source={require("../assets/success.png")}
                    source={{
                        uri:
                            "https://images.unsplash.com/photo-1519582149095-fe7d19b2a3d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2152&q=80",
                    }}
                    style={styles.image}
                    // resizeMode={"contain"}
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    It took{" "}
                    <Text style={styles.highlight}>{props.roundsNumber}</Text>{" "}
                    rounds to guess the number{" "}
                    <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>New Game</MainButton>
        </View>
    );
};

export default GameOver;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: "black",
        width: 300,
        height: 300,
        overflow: "hidden",
        margin: 10,
    },

    image: {
        width: "100%",
        height: "100%",
    },

    highlight: {
        color: colors.accent,
        fontFamily: "open-sans-bold",
        margin: 10,
    },

    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15,
    },

    resultText: {
        textAlign: "center",
        fontSize: 20,
    },
});
