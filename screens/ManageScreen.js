import { Text, View, StyleSheet } from "react-native";

import FridgeInfo from "../components/FridgeInfo";
import GoBack from "../components/GoBack";
import FoodList from "../components/FoodList";
import FloatingButton from "../components/FloatingButton";

export default function ManageScreen({ navigation }) {
  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  const handleAddFood = () => {
    console.log("Add food");
  };

  return (
    <View style={styles.container}>
      <GoBack from="Home" handleGoBack={handleGoBack} />
      <FridgeInfo fridgeName="My Babe" fridgeId="123abc" />
      <FoodList />
      <FloatingButton onPress={handleAddFood} />
    </View>
  );
}

const styles = StyleSheet.create({});
