import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SPOON_API_KEY, SPOON_URL } from "@env";

import RecipeThumbnail from "./RecipeThumbnail";

export default function RecipeList({ listIngredients }) {
  const [listRecipes, setListRecipes] = useState([]);

  useEffect(() => {
    console.log("listIngredients in recipe list: " + listIngredients);
    axios({
      method: "GET",
      url: SPOON_URL,
      params: {
        apiKey: SPOON_API_KEY,
        ingredients: listIngredients,
        number: 10,
      },
    }).then((response) => setListRecipes(response.data));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {listRecipes.map((recipe) => (
          <RecipeThumbnail
            key={recipe.id}
            imageUri={recipe.image}
            title={recipe.title}
            missingIngredients={recipe.missedIngredientCount}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 80,
    left: 32,
    zIndex: 1,
    height: "80%",
  },
});
