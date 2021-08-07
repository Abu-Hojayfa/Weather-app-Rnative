import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WeatherApp from "./WeatherApp";

const MainApp = () => {
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
      <SafeAreaView style={styles.AndroidSafe}>
        <WeatherApp />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  AndroidSafe: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  mainArea: {
    minHeight: "100%",
  },
});

export default MainApp;
