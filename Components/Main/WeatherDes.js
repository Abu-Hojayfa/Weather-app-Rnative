import React from "react";
import { Image, Text, View } from "react-native";
import tailwind from "tailwind-rn";

const WeatherDes = ({ pressure, wind_speed, visibility, humidity }) => {
  const windSpeed =
    (wind_speed * 3.6).toString().split(".")[0] +
    "." +
    (wind_speed * 3.6).toString().split(".")[1].charAt(0);

  let visibilityFormatted;

  if ((visibility / 1000).toString().indexOf(".") !== -1) {
    visibilityFormatted =
      (visibility / 1000).toString().split(".")[0] +
      "." +
      (visibility / 1000).toString().split(".")[1].charAt(0) +
      (visibility / 1000).toString().split(".")[1].charAt(1);
  } else {
    visibilityFormatted = visibility / 1000;
  }


  const indicatorText = `text-gray-500 text-xs font-semibold items-center`;

  const indicatorValue = `text-base font-bold items-center`;

  const icons = `items-center`;

  const sectionDes = "flex-1 flex items-center";

  return (
    <View
      style={tailwind(
        "flex flex-row p-2 pt-4 pb-4 ml-8 bg-white w-5/6 rounded-3xl"
      )}
    >
      <View style={tailwind(`${sectionDes}`)}>
        <Image
          style={tailwind(`${icons}`)}
          source={require("../../assets/humidity.png")}
        />
        <Text style={tailwind(`${indicatorValue}`)}>{humidity}%</Text>
        <Text style={tailwind(`${indicatorText}`)}>Humidity</Text>
      </View>

      <View style={tailwind(`${sectionDes}`)}>
        <Image
          style={tailwind(`${icons}`)}
          source={require("../../assets/wind.png")}
        />
        <Text style={tailwind(`${indicatorValue}`)}>{windSpeed} km/h</Text>
        <Text style={tailwind(`${indicatorText}`)}>wind Speed</Text>
      </View>

      <View style={tailwind(`${sectionDes}`)}>
        <Image
          style={tailwind(`${icons}`)}
          source={require("../../assets/speedometer.png")}
        />
        <Text style={tailwind(`${indicatorValue}`)}>{pressure}</Text>
        <Text style={tailwind(`${indicatorText}`)}>Air Pressure</Text>
      </View>

      <View style={tailwind(`${sectionDes}`)}>
        <Image
          style={tailwind(`${icons}`)}
          source={require("../../assets/visibility.png")}
        />
        <Text style={tailwind(`${indicatorValue}`)}>
          {visibilityFormatted} km
        </Text>
        <Text style={tailwind(`${indicatorText}`)}>Visibility</Text>
      </View>
    </View>
  );
};

export default WeatherDes;
