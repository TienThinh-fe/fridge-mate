import { Text, View, Button, StyleSheet } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import QRCode from "react-native-qrcode-svg";
import { doc, getDoc } from "firebase/firestore";

import FridgeInfo from "../components/FridgeInfo";
import GoBack from "../components/GoBack";
import ActionButton from "../components/ActionButton";

import AppContext from "../context/AppContext";
import db from "../firebase";

export default function QrScreen({ navigation }) {
  const [fridgeName, setFridgeName] = useState("");
  const [fridgeId, setFridgeId] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);

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
    const name = fridgeSnap.data().name;
    setFridgeName(name);
    setFridgeId(fridgeId);
  };

  const handleGoBack = () => {
    navigation.navigate("ManageFridge");
  };

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <View style={styles.container}>
      <GoBack from="Manage Food" handleGoBack={handleGoBack} />
      <FridgeInfo fridgeName={fridgeName} fridgeId={fridgeId} />
      <View>
        {!isRevealed && (
          <ActionButton
            handlePress={handleReveal}
            action="QR Code"
            customerStyle={{ backgroundColor: "#000" }}
            textColor="#fff"
          />
        )}
        {isRevealed && (
          <QRCode
            value={fridgeId ? fridgeId : ""}
            size={300}
            bgColor="purple"
            fgColor="white"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
