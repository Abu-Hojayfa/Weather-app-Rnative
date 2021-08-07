import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Linking,
} from "react-native";
import tailwind from "tailwind-rn";
import moment from "moment";
import WeatherDes from "./WeatherDes";
import WeatherHourly from "./WeatherHourly";
import Svg, { Path } from "react-native-svg";

const WeatherHome = (props) => {
  const {
    timezone,
    current: {
      dt,
      temp,
      feels_like,
      weather,
      humidity,
      visibility,
      wind_speed,
      pressure,
    },
    hourly,
    daily,
  } = props.temp;
  const date = moment.unix(dt);
  const color = "#4C3FAE";
  return (
    <View>
      <View style={tailwind("pt-2 pb-10")}>
        <Text style={tailwind("text-2xl text-center pb-1 font-bold")}>
          {timezone.split("/")[1]}
        </Text>
        <Text style={tailwind("text-center")}>{moment().format("h:mm A")}</Text>
      </View>

      <View style={styles.dateArea}>
        <Text
          style={tailwind("bg-white text-center text-sm rounded-2xl z-10 p-1")}
        >
          {date.format("dddd, MMM DD, YYYY")}
        </Text>
      </View>

      <View style={tailwind("flex flex-row")}>
        <Image
          style={tailwind("mr-8")}
          source={require("../../assets/leftbg.png")}
        />
        <ImageBackground
          style={styles.bgImage}
          source={require("../../assets/mainWeatherBG.png")}
        >
          <Image
            style={styles.mainTempImg}
            source={require("../../assets/monAndCloud.png")}
          />
        </ImageBackground>
        <Image
          style={tailwind("")}
          source={require("../../assets/rightbg.png")}
        />
      </View>

      <View style={styles.viewTemp}>
        <Text style={styles.temp}>{temp.toString().split(".")[0]}&deg;</Text>
        <View style={{ transform: [{ translateY: -5 }] }}>
          <Text style={tailwind("text-white text-sm font-bold")}>
            Feels like {feels_like}&deg;c
          </Text>
          <Text style={tailwind("text-white text-sm font-bold")}>
            {weather[0].description.charAt(0).toUpperCase() +
              weather[0].description.slice(1)}
          </Text>
        </View>
      </View>

      <View style={styles.weatherDes}>
        <WeatherDes
          humidity={humidity}
          visibility={visibility}
          wind_speed={wind_speed}
          pressure={pressure}
        />
      </View>

      <Svg style={{ height: 1200, transform: [{ translateY: 30 }] }}>
        <Path
          fill="#9992d1"
          fill-opacity="1"
          d="M-5.36,12.33 C119.92,115.95 349.03,-54.77 501.97,30.09 L500.00,150.00 L0.00,150.00 Z"
        ></Path>
        <Text
          style={{
            color: color,
            textAlign: "center",
            transform: [{ translateY: 100 }],
          }}
        >
          &#9400; Developed by
          <Text
            onPress={() => Linking.openURL("https://hojayfa.netlify.app/")}
            style={tailwind("text-lg text-gray-600 font-bold")}
          >
            {" "}
            Hojayfa
          </Text>
        </Text>
      </Svg>

      <View style={styles.bottomArea}>
        <WeatherHourly
          daily={daily}
          hourly={hourly}
          dtc={dt}
          desc={weather[0].description}
          tempc={temp}
        />
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
    height: 273,
    transform: [{ translateX: 19 }],
  },

  dateArea: {
    width: "43%",
    marginLeft: "28%",
    transform: [{ translateY: -10 }],
  },

  mainTempImg: {
    width: "50%",
    height: "44%",
    marginLeft: "13%",
    transform: [{ translateY: 5 }],
  },

  temp: {
    fontSize: 75,
    color: "white",
    fontWeight: "600",
  },

  viewTemp: {
    transform: [{ translateY: -150 }],
    marginLeft: "38%",
  },

  weatherDes: {
    transform: [{ translateY: -120 }],
  },

  bottomArea: {
    transform: [{ translateY: -1307 }],
  },
});
