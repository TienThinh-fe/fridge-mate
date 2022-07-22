import { ScrollView, StyleSheet, Alert } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import FoodItem from "./FoodItem";

import AppContext from "../context/AppContext";
import db from "../firebase";

export default function FoodList({ listOfFood }) {
  const [fridgeId, setFridgeId] = useState("");

  const myContext = useContext(AppContext);

  useEffect(() => {
    getFridgeData();
  });

  const getFridgeData = async () => {
    const docRef = doc(db, "user", myContext.user.id);
    const docSnap = await getDoc(docRef);
    const fridgeId = docSnap.data().fridgeId;

    const fridgeRef = doc(db, "fridge", fridgeId);
    const fridgeSnap = await getDoc(fridgeRef);
    setFridgeId(fridgeId);
  };

  const handleDeleteItem = (event, index) => {
    Alert.alert("Delete Item", `Are you sure you want to delete ${index}?`, [
      { text: "Cancel" },
      { text: "Delete", onPress: () => deleteItemInFirestore(index) },
    ]);
  };

  const deleteItemInFirestore = async (index) => {
    try {
      await updateDoc(doc(db, "fridge", fridgeId), {
        listOfFood: listOfFood.filter((item, i) => i !== index),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {listOfFood.map((food, index) => (
        <FoodItem
          key={index}
          foodName={food.name}
          date={food.date}
          quantity={food.quantity}
          isSpoiled={food.isSpoiled ? true : false}
          handleLongPress={(event) => handleDeleteItem(event, index)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 120,
    left: 32,
    zIndex: 1,
  },
});
