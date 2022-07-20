import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

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
    navigation.goBack();
  };

  const handleFridgeNameInput = (text) => {
    console.log("NAME: " + text);
  };

  const handleFridgeVolumeInput = (text) => {
    console.log("VOLUME: " + text);
  };

  const handleAdd = () => {
    console.log("ADD FRIDGE");
  };

  const handleJoinOther = () => {
    console.log("JOIN OTHER FRIDGE");
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
