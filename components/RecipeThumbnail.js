import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";

export default function RecipeThumbnail({
  imageUri,
  title,
  missingIngredients,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUri }} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.missing}>
          Missed ingredients: {missingIngredients}
        </Text>
      </View>
    </View>
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
  imageContainer: {
    borderColor: "#000",
    borderWidth: 1,
    width: 60,
    height: 60,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    paddingLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  missing: {
    fontSize: 12,
    color: "#BE2C2C",
    fontWeight: "300",
  },
});
