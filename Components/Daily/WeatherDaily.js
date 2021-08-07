import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tailwind from "tailwind-rn";
import moment from "moment";
import { styles } from "./WeatherDailyStyle";

const WeatherDaily = ({ daily, dtc, tempc, desc }) => {
  const navigation = useNavigation();
  const date = moment.unix(dtc).format("dddd, DD MMMM YYYY");
  return (
    <View>
      <View style={tailwind("flex flex-row pt-10")}>
        <Text
          style={styles.backArrow}
          onPress={() => navigation.navigate("Home")}
        >
          &#x2039;
        </Text>
        <Text style={tailwind("text-2xl font-bold text-white tracking-wider")}>
          Today's Weather
        </Text>
      </View>
      <Text style={styles.dateOfToday}>{date}</Text>

      <View style={tailwind("mt-12 ml-2")}>
        <ImageBackground
          style={styles.bgImage}
          source={require("../../assets/frame.png")}
        >
          <View style={tailwind("flex flex-row")}>
            <Image
              style={tailwind("w-36 h-36")}
              source={require("../../assets/monAndCloud.png")}
            />
            <View style={styles.weatherDes}>
              <Text style={styles.tempc}>
                {tempc.toString().split(".")[0]}&deg;c
              </Text>
              <Text style={styles.desc}>
                {desc.charAt(0).toUpperCase() + desc.slice(1)}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>

        <Text style={tailwind(" text-white text-2xl font-bold pt-10 pb-4 ml-12")}>Future Weather &#8595;</Text>
        <ScrollView
          style={styles.scrollingContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {daily.map((dWeather) => (
            <View style={tailwind('pt-2')} key={dWeather.dt}>
              <ImageBackground
                style={styles.bgImage}
                source={require("../../assets/frame.png")}
              >
                <View style={tailwind("flex flex-row")}>
                  <Image
                    style={tailwind("w-36 h-36 mt-2")}
                    source={{
                      uri: `http://openweathermap.org/img/wn/${dWeather.weather[0].icon}.png`,
                    }}
                  />
                  <View style={tailwind("pt-8 ml-4")}>
                    <Text style={styles.tempDaily}>
                      {dWeather.temp.day.toString().split(".")[0]}&deg;c
                    </Text>
                    <View style={tailwind("")}>
                      <Text style={tailwind("text-base text-white font-bold")}>
                        {moment.unix(dWeather.dt).format("dddd")}
                      </Text>
                      <Text style={tailwind("text-sm text-gray-300 font-bold")}>
                        {moment.unix(dWeather.dt).format(" DD MMMM YYYY")}
                      </Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
      </View>
  );
};

export default WeatherDaily;
