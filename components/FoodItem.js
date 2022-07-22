import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { formatDate } from "../helpers";

import AppContext from "../context/AppContext";
import db from "../firebase";

export default function FoodItem({
  handleLongPress,
  index,
  foodName,
  date,
  quantity,
  isSpoiled,
}) {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [fridgeId, setFridgeId] = useState("");
  const [listOfFood, setListOfFood] = useState([]);

  const myContext = useContext(AppContext);

  useEffect(() => {
    getFridgeData();
  }, []);

  useEffect(() => {
    updateFoodItem();
  }, [itemQuantity]);

  const getFridgeData = async () => {
    const docRef = doc(db, "user", myContext.user.id);
    const docSnap = await getDoc(docRef);
    const fId = docSnap.data().fridgeId;
    const fridgeRef = doc(db, "fridge", fId);
    const fridgeSnap = await getDoc(fridgeRef);
    setFridgeId(fId);
    setListOfFood(fridgeSnap.data().listOfFood);
  };

  const updateFoodItem = () => {
    if (listOfFood.length > 0) {
      setListOfFood((prevList) => {
        const newList = [...prevList];
        newList[index].quantity = itemQuantity;
        newList[index].date = formatDate();
        return newList;
      });
    }
  };

  const handleUpdateQuantity = async () => {
    updateFoodItem();
    try {
      await updateDoc(doc(db, "fridge", fridgeId), {
        listOfFood: listOfFood,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity onLongPress={handleLongPress}>
      <View
        style={[styles.container, isSpoiled && { backgroundColor: "#FF9D9D" }]}
      >
        <View style={styles.item}>
          <View>
            <Text style={styles.foodName}>{foodName}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          {isSpoiled && <Text style={styles.spoiled}>!</Text>}
        </View>
        <View style={styles.quantityContainer}>
          <TextInput
            style={styles.quantity}
            value={itemQuantity}
            onChangeText={(text) => setItemQuantity(text)}
            onBlur={handleUpdateQuantity}
            keyboardType="numeric"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    marginTop: 20,
  },
  item: {
    width: "80%",
    borderRightColor: "#000",
    borderRightWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  spoiled: {
    paddingRight: 16,
  },
  foodName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    fontWeight: "300",
    color: "#000",
  },
  quantityContainer: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
