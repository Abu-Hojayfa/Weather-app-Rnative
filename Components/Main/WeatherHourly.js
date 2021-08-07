import React from "react";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import { Dimensions } from "react-native";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height;

const WeatherHourly = ({ hourly, daily, dtc, tempc, desc }) => {
  const navigation = useNavigation();

  const lessHourReport = hourly.slice(0, 12);
  const firstOne = lessHourReport[0];

  const restHours = lessHourReport;
  restHours.shift();

  const hour = moment.unix(firstOne.dt).format("hh");
  const meridian = moment.unix(firstOne.dt).format("A");

  const naviToDay = tailwind(" mr-24 text-gray-700 text-lg font-bold");
  const naviTO7Days = tailwind(" text-black text-lg font-bold");

  const colors1 = [
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
  ];

  const perHour = tailwind("items-center pt-2");
  const iconStyle = tailwind("w-24 h-12 mb-2");
  const weather = tailwind("text-white text-lg font-bold");
  const time = tailwind("text-white pb-1");
  const feelsLike = tailwind("text-white text-xs pb-1 pt-2");

  return (
    <View>
      <View style={tailwind("flex flex-row justify-around mb-4")}>
        <Text style={naviToDay}>Today</Text>

        <Text
          onPress={() =>
            navigation.navigate("Daily", {
              daily: daily,
              dtc: dtc,
              tempc: tempc,
              desc: desc,
            })
          }
          style={naviTO7Days}
        >
          Next Few Days &#10140;
        </Text>
      </View>

      <View style={{ width: "100%", height: "100%" }}>
        <ScrollView horizontal={true}>
          <LinearGradient style={styles.firstHourWeather} colors={colors1}>
            <View style={perHour}>
              <Text style={time}>
                {hour}:00 {meridian}
              </Text>
              <Image
                style={iconStyle}
                source={{
                  uri: `http://openweathermap.org/img/wn/${firstOne.weather[0].icon}.png`,
                }}
              />
              <Text style={weather}>
                {firstOne.temp.toString().split(".")[0]} &deg;c
              </Text>
              <Text style={feelsLike}>{firstOne.weather[0].description}</Text>
            </View>
          </LinearGradient>

          {restHours.map((WeatherHourly) => (
            <LinearGradient
              key={WeatherHourly.dt}
              style={styles.restHourWeather}
              colors={colors1}
            >
              <View style={perHour}>
                <Text style={time}>
                  {moment.unix(WeatherHourly.dt).format("hh")}:00{" "}
                  {moment.unix(WeatherHourly.dt).format("A")}
                </Text>
                <Image
                  style={iconStyle}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${WeatherHourly.weather[0].icon}.png`,
                  }}
                />
                <Text style={weather}>
                  {WeatherHourly.temp.toString().split(".")[0]} &deg;c
                </Text>
                <Text style={feelsLike}>
                  {WeatherHourly.weather[0].description}
                </Text>
              </View>
            </LinearGradient>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstHourWeather: {
    height: windowHeight / 5,
    borderRadius: 20,
    marginRight: 20,
    paddingLeft: 10,
    marginLeft: 30,
    paddingRight: 10,
  },
  restHourWeather: {
    height: windowHeight / 5,
    borderRadius: 20,
    marginRight: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default WeatherHourly;
