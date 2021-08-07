import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backArrow: {
    fontSize: 50,
    color: "white",
    fontWeight: "800",
    marginLeft: "5%",
    marginRight: "20%",
    transform: [{ translateY: -18 }],
  },
  dateOfToday: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    paddingLeft: 15,
    transform: [{ translateY: -25 }],
  },
  bgImage: {
    height: 170,
    width: 320,
    alignSelf: "center",
  },
  tempc: {
    fontSize: 55,
    color: "white",
    fontWeight: "700",
  },
  desc: {
    fontSize: 16,
    color: "white",
    transform: [{ translateY: -5 }],
    paddingLeft: 10,
  },
  weatherDes: {
    transform: [{ translateY: 40 }],
    marginLeft: 15,
  },
  tempDaily: {
    fontSize: 40,
    color: "white",
    fontWeight: "700"
  },
  scrollingContainer:{
    padding: 4,
    height: "45%"
  }
});

