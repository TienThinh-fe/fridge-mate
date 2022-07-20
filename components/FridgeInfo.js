import { Text, View, StyleSheet } from "react-native";

export default function FridgeInfo({ fridgeName, fridgeId }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        <Text style={styles.name}>{fridgeName}</Text>
        <Text style={styles.id}>#{fridgeId}</Text>
      </Text>
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
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginRight: 8,
  },
  id: {
    fontSize: 16,
    fontWeight: "600",
    color: "#AAAAAA",
  },
});
