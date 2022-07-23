import { Text, View, StyleSheet } from "react-native";
import React from "react";

import GoBack from "../components/GoBack";
import RecipeList from "../components/RecipeList";

export default function RecipeScreen({ navigation, route }) {
  const handleGoBack = () => {
    navigation.navigate("GetRecipe");
  };

  return (
    <View style={styles.container}>
      <GoBack from="Choose ingredients" handleGoBack={handleGoBack} />
      <RecipeList listIngredients={route.params.listIngredientText} />
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
