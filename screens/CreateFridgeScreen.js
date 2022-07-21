import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState, useContext } from "react";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

import GoBack from "../components/GoBack";
import Input from "../components/Input";
import ActionButton from "../components/ActionButton";

import AppContext from "../context/AppContext";
import db from "../firebase";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function CreateFridgeScreen({ navigation }) {
  const [name, setName] = useState("");
  const [volume, setVolume] = useState("");
  const myContext = useContext(AppContext);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleFridgeNameInput = (text) => {
    setName(text);
  };

  const handleFridgeVolumeInput = (text) => {
    setVolume(text);
  };

  const handleAdd = async () => {
    try {
      const docRef = await addDoc(collection(db, "fridge"), {
        name,
        volume,
        userId: myContext.user.id,
      });
      await updateDoc(doc(db, "user", myContext.user.id), {
        fridgeId: docRef.id,
      });
      navigation.navigate("ManageFridge");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleJoinOther = () => {
    navigation.navigate("JoinFridge");
  };

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <GoBack from="Home" handleGoBack={handleGoBack} />
        <Text style={styles.title}>Create new fridge</Text>
        <Input
          placeholder={"Fridge Name"}
          handleChangeText={handleFridgeNameInput}
        />
        <Input
          placeholder={"Volume of fridge (L)"}
          handleChangeText={handleFridgeVolumeInput}
          keyboardType={"numeric"}
        />
        <ActionButton
          handlePress={handleAdd}
          action="Add"
          customerStyle={{ backgroundColor: "#000" }}
          textColor="#fff"
        />
        <Pressable style={styles.joinOtherContainer} onPress={handleJoinOther}>
          <Text style={styles.joinOtherText}>Wanna join other's fridge?</Text>
        </Pressable>
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
  joinOtherContainer: {
    position: "absolute",
    bottom: 40,
  },
  joinOtherText: {
    textAlign: "center",
    color: "#000",
    textDecorationColor: "#000",
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "200",
  },
});
