import { Text, View, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function FridgeInfo({ handlePressInfo, fridgeName, fridgeId }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={handlePressInfo}>
        <Text style={styles.name}>{fridgeName}</Text>
      </Pressable>
      <Pressable onPress={handlePressInfo}>
        <Text style={styles.id}>#{fridgeId}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 80,
    left: 32,
    zIndex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginRight: 8,
  },
  id: {
    fontSize: 12,
    fontWeight: "600",
    color: "#AAAAAA",
  },
});
