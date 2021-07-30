import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import * as Location from "expo-location";
import { API_KEY } from "@env";
import WeatherHome from "./WeatherHome";

const WeatherApp = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    loadLocation();
  }, []);

  async function loadLocation() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg(
          "Access to Location is needed to get the weather information and run the app"
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&appid=${API_KEY}&units=metric`;

      const response = await fetch(weatherUrl);

      const data = await response.json();

      if (response.ok) {
        setTemp(data);
      } else {
        setErrorMsg(data.message);
      }
    } catch (error) {}
  }

  return (
    <View>
      {temp ? (
        <View>
          <WeatherHome temp={temp} />
        </View>
      ) : (
        <View>
          {errorMsg ? (
            <View style={tailwind("pt-28")}>
              <Text style={tailwind("text-red-600 font-bold ml-36 text-4xl")}>
                404!
              </Text>
              <Image
                style={tailwind("w-80 ml-8 mt-10 h-48")}
                source={require("../assets/404.gif")}
              />
              <Text style={tailwind("ml-20 pt-10 text-xl text-red-600")}>
                Error:
                {errorMsg}
              </Text>
            </View>
          ) : (
            <View style={tailwind("pt-32")}>
              <Text
                style={tailwind(
                  "pl-20 text-blue-500 font-semibold text-2xl pb-16"
                )}
              >
                {" "}
                Hello! Please Wait...
              </Text>

              <Image
                style={tailwind("w-80 ml-8 h-80 border rounded-full")}
                source={require("../assets/weatherLoad.gif")}
              />

              <Image
                style={tailwind("ml-12")}
                source={require("../assets/loadingTypo.gif")}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default WeatherApp;
