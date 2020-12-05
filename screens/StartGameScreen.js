import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Asobimashoo</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Reset"
                            color={Colors.accent}
                            onPress={() => {}}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Confirm"
                            color={Colors.primary}
                            onPress={() => {}}
                        />
                    </View>
                </View>
            </Card>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },

    title: {
        fontSize: 20,
        marginVertical: 10,
    },

    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },

    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },

    button: {
        width: 90,
    },
});
