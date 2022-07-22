import { Text, View, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";

import FridgeInfo from "../components/FridgeInfo";
import GoBack from "../components/GoBack";
import FoodList from "../components/FoodList";
import FloatingButton from "../components/FloatingButton";

import AppContext from "../context/AppContext";
import db from "../firebase";

export default function ManageScreen({ navigation }) {
  const [listOfFood, setListOfFood] = useState([]);
  const [fridgeName, setFridgeName] = useState("");
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
    setListOfFood(fridgeSnap.data().listOfFood);
    setFridgeName(fridgeSnap.data().name);
    setFridgeId(fridgeId);
  };

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  const handleAddFood = () => {
    navigation.navigate("AddFood");
  };

  const handleToQr = () => {
    navigation.navigate("Qr");
  };

  return (
    <View style={styles.container}>
      <GoBack from="Home" handleGoBack={handleGoBack} />
      <FridgeInfo
        fridgeName={fridgeName}
        fridgeId={fridgeId}
        handlePressInfo={handleToQr}
      />
      <FoodList listOfFood={listOfFood} />
      <FloatingButton onPress={handleAddFood} />
    </View>
  );
}

const styles = StyleSheet.create({});
