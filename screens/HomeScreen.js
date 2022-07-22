import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useState, useEffect, useContext } from "react";
import * as Google from "expo-auth-session/providers/google";
import React from "react";
import { doc, getDoc } from "firebase/firestore";

import Logo from "../components/Logo";
import FeaturePicker from "../components/FeaturePicker";

import AppContext from "../context/AppContext";
import db from "../firebase";

export default function HomeScreen({ navigation, route }) {
  const myContext = useContext(AppContext);

  const handleLogout = async () => {
    console.log("logout");
  };

  const handlePressFeature = async (event, type) => {
    const docRef = doc(db, "user", myContext.user.id);
    const docSnap = await getDoc(docRef);

    if (type === "fridge") {
      if (docSnap.data().fridgeId === null) {
        navigation.navigate("CreateFridge", { from: "Home" });
      } else {
        navigation.navigate("ManageFridge");
      }
    } else if (type === "recipe") {
      navigation.navigate("ManageFridge");
    }
  };

  return (
    <View style={styles.container}>
      <Logo fontSize={24} />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Hello, {myContext.user.name}</Text>
        <Pressable onPress={handleLogout}>
          <Image source={require("../assets/close-circle.png")} />
        </Pressable>
      </View>
      <View style={styles.functionPickerContainer}>
        <FeaturePicker
          featureName={"Manage your fridge"}
          imageSrc="../assets/fridge.png"
          handlePressFeature={(e) => handlePressFeature(e, "fridge")}
        />
        <FeaturePicker
          featureName={"Get recipe"}
          imageSrc="../assets/recipe.png"
          handlePressFeature={(e) => handlePressFeature(e, "recipe")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  welcomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 36,
    justifyContent: "space-between",
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: "500",
  },
  functionPickerContainer: {
    alignItems: "center",
  },
});
