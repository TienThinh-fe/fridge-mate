import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import GoBack from "../components/GoBack";
import ActionButton from "../components/ActionButton";
import CheckboxItem from "../components/CheckboxItem";

export default function GetRecipeScreen() {
  const [listIngredients, setListIngredients] = useState([]);

  const handleGoBack = () => {
    console.log("Go back");
  };

  const handleChoose = () => {
    console.log("Choose");
  };

  return (
    <View style={styles.container}>
      <GoBack from="Home" handleGoBack={handleGoBack} />
      <Text style={styles.title}>Choose food from your fridge</Text>
      <View style={styles.checkboxContainer}>
        <CheckboxItem text="Egg" />
      </View>
      <ActionButton
        handlePress={handleChoose}
        action="Choose"
        customerStyle={{ backgroundColor: "#000" }}
        textColor="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 24,
  },
  checkboxContainer: {
    marginBottom: 24,
  },
  checkbox: {
    marginBottom: 10,
  },
});
