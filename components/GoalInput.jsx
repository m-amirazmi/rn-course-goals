import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Text } from "react-native";

export const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState(null);
  const [error, setError] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    if (!enteredGoal) {
      setError("Please enter the goal! Click here to remove error");
    } else {
      props.onAddGoal(enteredGoal);
      setEnteredGoal("");
      setError("");
    }
  };

  const cancel = () => {
    if (error) {
      setError(null);
      props.onCancel();
    } else {
      props.onCancel();
    }
  };

  const errorHandler = () => {
    if (error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText} onPress={() => setError(null)}>
            {error}
          </Text>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headText}>Add Your New Goal!</Text>
        </View>
        {errorHandler()}
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    marginBottom: 5,
    padding: 5,
  },
  headText: {
    fontSize: 30,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    width: "45%",
  },
  errorContainer: {
    width: "80%",
    padding: 10,
    backgroundColor: "#F00",
  },
  errorText: {
    color: "#FFF",
  },
});
