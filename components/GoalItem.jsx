import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const GoalItem = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onDelete.bind(this, props.id)}
      activeOpacity={0.8}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "#000",
    borderWidth: 1,
    marginVertical: 5,
  },
});
