import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

import Logo from "../components/Logo";

export default function LoginScreen({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "905355758203-3mjq6b15l5c7jgqamm308in86ljs2qg3.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      getUserInfo(authentication);
    }
  }, [response]);

  const getUserInfo = async (authentication) => {
    const result = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${authentication.accessToken}` },
    });
    const user = await result.json();
    navigation.navigate("Home", { userInfo: user });
  };

  const handleGoogleLogin = () => {
    promptAsync();
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
