import { Pressable, Text, StyleSheet } from "react-native";

export default function ActionButton({
  handlePress,
  action,
  customerStyle,
  textColor,
}) {
  return (
    <Pressable onPress={handlePress} style={[styles.container, customerStyle]}>
      <Text style={[styles.buttonText, { color: textColor }]}>{action}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
  },
});
