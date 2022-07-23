import { Text, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Checkbox from "expo-checkbox";

export default function CheckboxItem({ text, handleCheck, isChecked }) {
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={(event) => handleCheck(text)}
        color={isChecked ? "black" : undefined}
      />
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: "600",
  },
});
