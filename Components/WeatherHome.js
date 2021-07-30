import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import moment from "moment";

const WeatherHome = (props) => {
  const {
    timezone,
    current: { temp, feels_like, weather },
  } = props.temp;

  return (
    <View>
      <View style={tailwind("pt-4 pb-10")}>
        <Text style={tailwind("text-2xl text-center pb-1 font-bold")}>
          {timezone.split("/")[1]}
        </Text>
        <Text style={tailwind("text-center")}>{moment().format("LT")}</Text>
      </View>

      <View style={styles.dateArea}>
        <Text
          style={tailwind("bg-white text-center text-sm rounded-2xl z-10 p-1")}
        >
          {moment().format("dddd, LL")}
        </Text>
      </View>

      <View style={tailwind("flex flex-row")}>
        <Image
          style={tailwind("mr-8")}
          source={require("../assets/leftbg.png")}
        />
        <ImageBackground
          style={styles.bgImage}
          source={require("../assets/mainWeatherBG.png")}
        >
          <Image
            style={styles.mainTempImg}
            source={require("../assets/monAndCloud.png")}
          />
        </ImageBackground>
        <Image style={tailwind("")} source={require("../assets/rightbg.png")} />
      </View>

      <View style={styles.viewTemp}>
        <Text style={styles.temp}>{temp.toString().split(".")[0]}&deg;</Text>
        <View style={{transform:[{translateY: -12}]}}>
          <Text style={tailwind("text-white text-base")}>
            Feels like {feels_like}&deg;c
          </Text>
          <Text style={tailwind("text-white text-base")}>
            {weather[0].description.charAt(0).toUpperCase() +
              weather[0].description.slice(1)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherHome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  bgImage: {
    width: "76.8%",
    height: "100%",
    transform: [{ translateX: 19 }],
    zIndex: 0,
  },

  dateArea: {
    width: "40%",
    marginLeft: "30.5%",
    transform: [{ translateY: 15 }],
    zIndex: 1,
  },

  mainTempImg: {
    width: "55%",
    height: "48%",
    marginLeft: "8%",
    transform: [{ translateY: -6 }],
  },

  temp: {
    fontSize: 75,
    color: "white",
    fontWeight: "600",
  },

  viewTemp: {
    transform: [{ translateY: -146 }],
    marginLeft: "37%",
  },
});
