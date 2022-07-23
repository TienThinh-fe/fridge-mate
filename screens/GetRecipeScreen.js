import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import GoBack from "../components/GoBack";
import ActionButton from "../components/ActionButton";
import CheckboxItem from "../components/CheckboxItem";

export default function GetRecipeScreen() {
  const [listIngredientsInFridge, setListIngredientsInFridge] = useState([
    {
      text: "Milk",
      isChecked: false,
    },
    {
      text: "Eggs",
      isChecked: false,
    },
    {
      text: "Bread",
      isChecked: false,
    },
  ]);

  const handleGoBack = () => {
    console.log("Go back");
  };

  const handleChoose = () => {
    console.log("List: ", listIngredientsInFridge);
  };

  const handleCheck = (index) => {
    setListIngredientsInFridge((prev) => {
      const newList = [...prev];
      newList[index].isChecked = !newList[index].isChecked;
      return newList;
    });
  };

  return (
    <View style={styles.container}>
      <GoBack from="Home" handleGoBack={handleGoBack} />
      <Text style={styles.title}>Choose food from your fridge</Text>
      <View style={styles.checkboxContainer}>
        <ScrollView style={styles.checkboxScroll}>
          {listIngredientsInFridge.map((ingredient, index) => (
            <CheckboxItem
              key={index}
              text={ingredient.text}
              isChecked={ingredient.isChecked}
              handleCheck={() => handleCheck(index)}
            />
          ))}
        </ScrollView>
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
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    marginBottom: 24,
  },
  checkboxScroll: {
    padding: 10,
  },
  checkbox: {
    marginBottom: 10,
  },
});
