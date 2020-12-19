import React from "react";
import { Button, StyleSheet, View, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

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
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>The number was: {props.userNumber}</BodyText>
            <Button title="NEW GAME" onPress={props.onRestart} />
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
    },
    image: {
        width: "100%",
        height: "100%",
    },
});
