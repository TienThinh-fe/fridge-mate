import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import Logo from "../components/Logo";
import FeaturePicker from "../components/FeaturePicker";

export default function HomeScreen() {
  const handleLogout = () => {
    console.log("Logout");
  };

  const handlePressFeature = (event, type) => {
    console.log("Feature pressed: " + type);
  };

  return (
    <View style={styles.container}>
      <Logo fontSize={24} />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Hello, Hoang Tien Thinh</Text>
        <Pressable onPress={handleLogout}>
          <Image source={require("../assets/close-circle.png")} />
        </Pressable>
      </View>
      <View style={styles.functionPickerContainer}>
        <FeaturePicker
          featureName={"Manage your fridge"}
          imageSrc="../assets/fridge.png"
          handlePressFeature={(e) => handlePressFeature(e, "fridge")}
        />
        <FeaturePicker
          featureName={"Get recipe"}
          imageSrc="../assets/recipe.png"
          handlePressFeature={(e) => handlePressFeature(e, "recipe")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  welcomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 36,
    justifyContent: "space-between",
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: "500",
  },
  functionPickerContainer: {
    alignItems: "center",
  },
});
