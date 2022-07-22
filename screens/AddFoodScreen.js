import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import FridgeInfo from "../components/FridgeInfo";
import GoBack from "../components/GoBack";
import Input from "../components/Input";
import ActionButton from "../components/ActionButton";

import AppContext from "../context/AppContext";
import db from "../firebase";
import { formatDate } from "../helpers";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function AddFoodScreen({ navigation }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [fridgeId, setFridgeId] = useState("");
  const [fridgeName, setFridgeName] = useState("");
  const [listOfFood, setListOfFood] = useState([]);

  const myContext = useContext(AppContext);

  useEffect(() => {
    getFridgeData();
  }, []);

  const getFridgeData = async () => {
    const docRef = doc(db, "user", myContext.user.id);
    const docSnap = await getDoc(docRef);
    const fId = docSnap.data().fridgeId;
    const fridgeRef = doc(db, "fridge", fId);
    const fridgeSnap = await getDoc(fridgeRef);

    setFridgeId(fId);
    setListOfFood(fridgeSnap.data().listOfFood);
    setFridgeName(fridgeSnap.data().name);
  };

  const handleGoBack = () => {
    navigation.navigate("ManageFridge");
  };

  const handleNameInput = (text) => {
    setName(text);
  };

  const handleQuantityInput = (text) => {
    setQuantity(text);
  };

  const handleAdd = async () => {
    console.log(listOfFood);
    try {
      await updateDoc(doc(db, "fridge", fridgeId), {
        listOfFood: [
          ...listOfFood,
          {
            name,
            quantity,
            date: formatDate(),
          },
        ],
      });
      navigation.navigate("ManageFridge");
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const handleCancel = () => {
    navigation.navigate("ManageFridge");
  };

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <GoBack from="Manage fridge" handleGoBack={handleGoBack} />
        <FridgeInfo fridgeName={fridgeName} fridgeId={fridgeId} />
        <Input placeholder={"Name"} handleChangeText={handleNameInput} />
        <Input
          placeholder={"Quantity / Weight"}
          handleChangeText={handleQuantityInput}
          keyboardType={"numeric"}
        />
        <ActionButton
          handlePress={handleAdd}
          action="Add"
          customerStyle={{ backgroundColor: "#000" }}
          textColor="#fff"
        />
        <ActionButton
          handlePress={handleCancel}
          action="Cancel"
          customerStyle={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#000",
            marginTop: 40,
          }}
          textColor="#000"
        />
      </View>
    </HideKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
