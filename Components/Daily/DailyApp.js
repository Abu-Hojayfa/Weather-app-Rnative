import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WeatherDaily from "./WeatherDaily";

const DailyApp = ({ route }) => {
  const daily = route.params.daily;
  const tempc = route.params.tempc;
  const desc = route.params.desc;
  const dtc = route.params.dtc;
  

  return (
    <LinearGradient
      style={styles.mainArea}
      colors={[
        "#877dc9",
        "#8278c7",
        "#7d72c5",
        "#786dc2",
        "#7368c0",
        "#6e63be",
        "#695ebb",
        "#6459b9",
        "#5e53b6",
        "#584cb4",
        "#5246b1",
        "#4c3fae",
      ]}
    >
      <SafeAreaView style={styles.AndroidSafe}>
        <WeatherDaily daily={daily} dtc={dtc} desc={desc} tempc={tempc} />
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

export default DailyApp;
