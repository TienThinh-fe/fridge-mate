import { Text, View, StyleSheet } from "react-native";
import { useEffect, useState, useContext } from "react";
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
  };

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  const handleAddFood = () => {
    navigation.navigate("AddFood");
  };

  return (
    <View style={styles.container}>
      <GoBack from="Home" handleGoBack={handleGoBack} />
      <FridgeInfo fridgeName={fridgeName} fridgeId="123abc" />
      <FoodList listOfFood={listOfFood} />
      <FloatingButton onPress={handleAddFood} />
    </View>
  );
}

const styles = StyleSheet.create({});
