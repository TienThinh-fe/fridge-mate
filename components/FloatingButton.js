import { Pressable, Text, StyleSheet } from "react-native";

export default function FloatingButton({ onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 580,
    left: 290,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    zIndex1: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "400",
    color: "#000",
  },
});
