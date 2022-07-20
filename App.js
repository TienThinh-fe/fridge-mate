import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import CreateFridgeScreen from "./screens/CreateFridgeScreen";
import JoinScreen from "./screens/JoinScreen";
import ManageScreen from "./screens/ManageScreen";
import AddFoodScreen from "./screens/AddFoodScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateFridge"
          component={CreateFridgeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JoinFridge"
          component={JoinScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageFridge"
          component={ManageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddFood"
          component={AddFoodScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
