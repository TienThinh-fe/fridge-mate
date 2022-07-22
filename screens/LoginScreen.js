import { useEffect, useContext } from "react";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { doc, setDoc, getDoc } from "firebase/firestore";

import Logo from "../components/Logo";
import db from "../firebase/index";

import AppContext from "../context/AppContext";

export default function LoginScreen({ navigation }) {
  const myContext = useContext(AppContext);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "905355758203-3mjq6b15l5c7jgqamm308in86ljs2qg3.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      addUserInfo(authentication);
    }
  }, [response]);

  const addUserInfo = async (authentication) => {
    const result = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${authentication.accessToken}` },
    });
    const user = await result.json();

    const docRef = doc(db, "user", user.id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      try {
        const docRef = await setDoc(doc(db, "user", user.id), {
          user,
          fridgeId: "",
        });
        myContext.setUser(user);
        navigation.navigate("Home");
      } catch (e) {
        console.log("Error adding document: ", e);
      }
    } else {
      myContext.setUser(user);
      navigation.navigate("Home");
    }
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
