import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import Logo from "../components/Logo";

export default function LoginScreen({ navigation }) {
  const handleGoogleLogin = () => {
    console.log("Google login");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Logo fontSize={40} />
      <Pressable style={styles.buttonLogin} onPress={handleGoogleLogin}>
        <Text style={styles.buttonText}>Login with Google</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogin: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#4285F4",
    width: "70%",
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
