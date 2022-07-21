import { ScrollView, StyleSheet } from "react-native";

import FoodItem from "./FoodItem";

export default function FoodList({ listOfFood }) {
  return (
    <ScrollView style={styles.container}>
      {listOfFood.map((food, index) => (
        <FoodItem
          key={index}
          foodName={food.name}
          date={food.date}
          quantity={food.quantity}
          isSpoiled={food.isSpoiled ? true : false}
        />
      ))}
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
