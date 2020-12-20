import React, { useState, useRef, useEffect } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import DefaultStyles from "../constants/default-styles";
// Icons from Ionicons
import { Ionicons } from "@expo/vector-icons";
import BodyText from "../components/BodyText";

/**
 * generates random number with a min and max val excluding val
 * @param {int} min
 * @param {int} max
 * @param {int} exclude
 */
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

const renderListItem = (value, numOfRounds) => (
    <View key={value} style={styles.listItem}>
        <BodyText>Round: #{numOfRounds} </BodyText>
        <BodyText>{value}</BodyText>
    </View>
);

const GameScreen = (props) => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);

    /**
     * States
     */
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setpastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    // registers the props so they can be used with useEffect
    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
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
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );
        setCurrentGuess(nextNumber);
        // setpastGuesses((curpastGuesses) => curpastGuesses + 1);
        setpastGuesses((curPastGuesses) => [nextNumber, ...curPastGuesses]);
    };

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.bodyText}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
                    <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
            </Card>

            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) =>
                        renderListItem(guess, pastGuesses.length - index)
                    )}
                </ScrollView>
            </View>
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

    listContainer: {
        // flex 1 is needed on android otherwise scrollable won't work
        flex: 1,
        width: "80%",
    },

    list: {
        // with scrollable list it's better to use flexGrow
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },

    listItem: {
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
    },
});
