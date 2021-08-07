import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainApp from "./Components/Main/MainApp";
import DailyApp from "./Components/Daily/DailyApp";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={MainApp}
        />
        <Stack.Screen
          name="Daily"
          options={{ headerShown: false }}
          component={DailyApp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
