import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Platform,
} from "react-native";
import tailwind from "tailwind-rn";
import { NativeRouter, Route } from "react-router-native";
import WeatherApp from "./Components/WeatherApp";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      style={styles.mainArea}
      colors={[
        "#dddbf3",
        "#dddbf3",
        "#dddbf3",
        "#d4d1ee",
        "#cac7ea",
        "#c1bee5",
        "#b8b4e0",
        "#b8b4e0",
        "#b8b4e0",
        "#b8b4e0",
        "#c1bee5",
        "#cac7ea",
        "#d4d1ee",
        "#dddbf3",
      ]}
    >
      <NativeRouter>
        <SafeAreaView style={styles.AndroidSafe}>
          <Route path="/">
            <WeatherApp />
          </Route>
        </SafeAreaView>
      </NativeRouter>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  AndroidSafe: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  mainArea: {
    minHeight: '100%'
  }
});
