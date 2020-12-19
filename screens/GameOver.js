import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const GameOver = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Game is over!</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>The number was: {props.userNumber}</Text>
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
});
