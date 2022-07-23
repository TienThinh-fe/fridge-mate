import { Text, View, StyleSheet } from "react-native";
import React, { useEffect } from "react";

import GoBack from "../components/GoBack";
import RecipeList from "../components/RecipeList";

export default function RecipeScreen({ navigation, route }) {
  useEffect(() => {
    console.log(route.params.listIngredientsInFridge);
  }, []);

  const handleGoBack = () => {
    navigation.navigate("GetRecipe");
  };

  return (
    <View style={styles.container}>
      <GoBack from="Choose ingredients" handleGoBack={handleGoBack} />
      <RecipeList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
