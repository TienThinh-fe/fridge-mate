import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { collection, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import CreateFridgeScreen from "./screens/CreateFridgeScreen";
import JoinScreen from "./screens/JoinScreen";
import ManageScreen from "./screens/ManageScreen";
import AddFoodScreen from "./screens/AddFoodScreen";
import QrScreen from "./screens/QrScreen";
import ScanScreen from "./screens/ScanScreen";
import GetRecipeScreen from "./screens/GetRecipeScreen";
import RecipeScreen from "./screens/RecipeScreen";

import AppContext from "./context/AppContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = React.useState({});

  const userSettings = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
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
          <Stack.Screen
            name="Qr"
            component={QrScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Scan"
            component={ScanScreen}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="GetRecipe"
            component={GetRecipeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recipe"
            component={RecipeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
