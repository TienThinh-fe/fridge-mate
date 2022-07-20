import { ScrollView, StyleSheet } from "react-native";

import FoodItem from "./FoodItem";

export default function FoodList() {
  return (
    <ScrollView style={styles.container}>
      <FoodItem foodName="Banana" date="19/07/2022" quantity="2" />
      <FoodItem foodName="Egg" date="16/07/2022" quantity="10" />
      <FoodItem
        foodName="Tomato"
        date="10/07/2022"
        quantity="4"
        isSpoiled={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 120,
    left: 32,
    zIndex: 1,
  },
});
