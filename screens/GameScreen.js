import React, { useState, useRef, useEffect } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import DefaultStyles from "../constants/default-styles";

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );

    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
        // check if these value change and run the use effect
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && currentGuess < props.userChoice) ||
            (direction === "greater" && currentGuess > props.userChoice)
        ) {
            Alert.alert("Don't lie!", "You are lying to me...", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }
        if (direction === "lower") {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current
        );
        setCurrentGuess(nextNumber);
        setRounds((curRounds) => curRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.bodyText}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button
                    title="Lower"
                    onPress={nextGuessHandler.bind(this, "lower")}
                />
                <Button
                    title="Higher"
                    onPress={nextGuessHandler.bind(this, "greater")}
                />
            </Card>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%",
    },
});
