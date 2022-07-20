import { Text, View, StyleSheet } from "react-native";

export default function Logo({ fontSize }) {
  return (
    <View>
      <Text>
        <Text style={[styles.textFridge, { fontSize }]}>Fridge</Text>
        <Text style={[styles.textMate, { fontSize }]}>Mate</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  textFridge: {
    fontWeight: "bold",
    color: "#000",
  },
  textMate: {
    fontWeight: "bold",
    color: "#8D2A72",
  },
});
