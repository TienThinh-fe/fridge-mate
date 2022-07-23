import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";

import GoBack from "../components/GoBack";
import ActionButton from "../components/ActionButton";
import CheckboxItem from "../components/CheckboxItem";

import AppContext from "../context/AppContext";
import db from "../firebase";

export default function GetRecipeScreen({ navigation }) {
  const [listIngredientsInFridge, setListIngredientsInFridge] = useState([]);

  const myContext = useContext(AppContext);

  useEffect(() => {
    getFridgeData()
      .then(() => {
        console.log("getFridgeData");
      })
      .catch(() => {
        console.log("Error getting fridge data");
      });
  }, []);

  const getFridgeData = async () => {
    const docRef = doc(db, "user", myContext.user.id);
    const docSnap = await getDoc(docRef);
    const fridgeId = docSnap.data().fridgeId;
    const fridgeRef = doc(db, "fridge", fridgeId);
    const fridgeSnap = await getDoc(fridgeRef);
    const listOfFood = fridgeSnap.data().listOfFood;
    listOfFood.forEach((element) => {
      setListIngredientsInFridge((prevState) => [
        ...prevState,
        {
          text: element.name,
          isChecked: false,
        },
      ]);
    });
  };

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  const convertListToText = () => {
    let text = "";
    for (let i = 0; i < listIngredientsInFridge.length; i++) {
      if (i === 0 && listIngredientsInFridge[i].isChecked) {
        text = listIngredientsInFridge[i].text;
      } else if (i !== 0 && listIngredientsInFridge[i].isChecked) {
        text = text + ", " + listIngredientsInFridge[i].text;
      }
    }
    return text;
  };

  const handleChoose = () => {
    const text = convertListToText();
    navigation.navigate("Recipe", {
      listIngredientText: text,
    });
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
