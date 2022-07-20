import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import FridgeInfo from "../components/FridgeInfo";
import GoBack from "../components/GoBack";
import Input from "../components/Input";
import ActionButton from "../components/ActionButton";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function AddFoodScreen({ navigation }) {
  const handleGoBack = () => {
    navigation.navigate("ManageFridge");
  };

  const handleNameInput = (text) => {
    console.log("FOOD NAME: " + text);
  };

  const handleQuantityInput = (text) => {
    console.log("FOOD QUANTITY: " + text);
  };

  const handleAdd = () => {
    console.log("ADD FOOD");
  };

  const handleCancel = () => {
    navigation.navigate("ManageFridge");
  };

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <GoBack from="Manage fridge" handleGoBack={handleGoBack} />
        <FridgeInfo fridgeName="My Babe" fridgeId="123abc" />
        <Input placeholder={"Name"} handleChangeText={handleNameInput} />
        <Input
          placeholder={"Quantity / Weight"}
          handleChangeText={handleQuantityInput}
          keyboardType={"numeric"}
        />
        <ActionButton
          handlePress={handleAdd}
          action="Add"
          customerStyle={{ backgroundColor: "#000" }}
          textColor="#fff"
        />
        <ActionButton
          handlePress={handleCancel}
          action="Cancel"
          customerStyle={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#000",
            marginTop: 40,
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
    justifyContent: "center",
    alignItems: "center",
  },
});
