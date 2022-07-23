import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";

import RecipeThumbnail from "./RecipeThumbnail";

export default function RecipeList() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <RecipeThumbnail
          imageUri="https://reactjs.org/logo-og.png"
          title="Apple Or Peach Strudel"
          missingIngredients="3"
        />
        <RecipeThumbnail
          imageUri="https://reactjs.org/logo-og.png"
          title="Apple Or Peach Strudel"
          missingIngredients="3"
        />
        <RecipeThumbnail
          imageUri="https://reactjs.org/logo-og.png"
          title="Apple Or Peach Strudel"
          missingIngredients="3"
        />
        <RecipeThumbnail
          imageUri="https://reactjs.org/logo-og.png"
          title="Apple Or Peach Strudel"
          missingIngredients="3"
        />
        <RecipeThumbnail
          imageUri="https://reactjs.org/logo-og.png"
          title="Apple Or Peach Strudel"
          missingIngredients="3"
        />
        <RecipeThumbnail
          imageUri="https://reactjs.org/logo-og.png"
          title="Apple Or Peach Strudel"
          missingIngredients="3"
        />
        <RecipeThumbnail
          imageUri="https://reactjs.org/logo-og.png"
          title="Apple Or Peach Strudel"
          missingIngredients="3"
        />
        <RecipeThumbnail
          imageUri="https://reactjs.org/logo-og.png"
          title="Apple Or Peach Strudel"
          missingIngredients="3"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 100,
    left: 32,
    zIndex: 1,
    height: "80%",
  },
});
