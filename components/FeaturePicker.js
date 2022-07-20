import { Text, View, Image, StyleSheet, Pressable } from "react-native";

export default function FeaturePicker({
  featureName,
  imageSrc,
  handlePressFeature,
}) {
  return (
    <Pressable onPress={handlePressFeature}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/fridge.png")} />
        <Text style={styles.name}>{featureName}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    width: 164,
    height: 164,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    position: "absolute",
    bottom: -30,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  image: {
    width: 96,
    height: 96,
  },
});
