import { Text, View, Image, StyleSheet, Pressable } from "react-native";

export default function GoBack({ handleGoBack, from }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleGoBack}>
        <Image source={require("../assets/arrow-left.png")} />
        <Text style={styles.text}>{from}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 32,
    left: 32,
    zIndex: 1,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    paddingLeft: 8,
    fontWeight: "500",
  },
});
