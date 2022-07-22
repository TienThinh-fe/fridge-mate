import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function FoodItem({
  handleLongPress,
  foodName,
  date,
  quantity,
  isSpoiled,
}) {
  return (
    <TouchableOpacity onLongPress={handleLongPress}>
      <View
        style={[styles.container, isSpoiled && { backgroundColor: "#FF9D9D" }]}
      >
        <View style={styles.item}>
          <View>
            <Text style={styles.foodName}>{foodName}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          {isSpoiled && <Text style={styles.spoiled}>!</Text>}
        </View>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantity}>{quantity}</Text>
          {/* <TextInput style={styles.quantity} value={quantity} /> */}
        </View>
      </View>
    </TouchableOpacity>
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
  item: {
    width: "80%",
    borderRightColor: "#000",
    borderRightWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  spoiled: {
    paddingRight: 16,
  },
  foodName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    fontWeight: "300",
    color: "#000",
  },
  quantityContainer: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
