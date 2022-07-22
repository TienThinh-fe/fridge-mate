import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";

import GoBack from "../components/GoBack";
import Input from "../components/Input";
import ActionButton from "../components/ActionButton";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function CreateFridgeScreen({ navigation }) {
  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  const handleFridgeIdInput = (text) => {
    console.log("Id: " + text);
  };

  const handleJoin = () => {
    console.log("JOIN FRIDGE");
  };

  const handleScan = () => {
    navigation.navigate("Scan");
  };

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <GoBack from="Home" handleGoBack={handleGoBack} />
        <Text style={styles.title}>Create new fridge</Text>
        <Input
          placeholder={"Fridge ID"}
          handleChangeText={handleFridgeIdInput}
        />
        <ActionButton
          handlePress={handleJoin}
          action="Join"
          customerStyle={{ backgroundColor: "#000" }}
          textColor="#fff"
        />
        <ActionButton
          handlePress={handleScan}
          action="Scan QR"
          customerStyle={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#000",
          }}
          textColor="#000"
        />
      </View>
    </HideKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 40,
  },
});
