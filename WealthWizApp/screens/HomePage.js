import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
  Pressable,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
<<<<<<< Updated upstream
=======
import Login from "./Login";
import Registration from "./Register2";
>>>>>>> Stashed changes

const HomePage = () => {
  return (
    <View style={styles.homePage2}>
      <ImageBackground
        style={[styles.coins1Icon, styles.coins1IconPosition]}
        resizeMode="cover"
        source={require("../assets/coins1.png")}
      />
      <StatusBar style={styles.coins1IconPosition} translucent={true} />
      <View style={[styles.welcomeToWealthwiz, styles.bank1IconPosition]}>
        <Text style={[styles.chooseACourse, styles.chooseACourseTypo]}>
          Choose a course to begin your tour.
        </Text>
        <Text
          style={[styles.welcomeToWealthwizContainer, styles.chooseACourseTypo]}
        >
          <Text style={styles.welcomeToWealthwiz1}>{`Welcome to 
WealthWiz,`}</Text>
          <Text style={styles.user}>{` <user>!`}</Text>
        </Text>
      </View>
      <ImageBackground
        style={[styles.bank1Icon, styles.bank1IconPosition]}
        resizeMode="cover"
        source={require("../assets/bank12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  coins1IconPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  seperatorLayout: {
    width: 134,
    left: "50%",
  },
  iconLayout: {
    width: "35.43%",
    height: "64%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  learn1Typo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.titleCaptionCaption112,
    lineHeight: 16,
    textDecoration: "underline",
    top: "66%",
    fontSize: FontSize.smallTextRegular_size,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  learnLayout: {
    width: "25.06%",
    height: 50,
    top: 0,
    position: "absolute",
  },
  bank1IconPosition: {
    top: 62,
    height: 128,
    position: "absolute",
  },
  chooseACourseTypo: {
    textAlign: "left",
    fontFamily: FontFamily.extraLargeTextRegular,
    left: 0,
    position: "absolute",
  },
  coins1Icon: {
    top: 459,
    height: 393,
  },
  chooseACourse: {
    top: 108,
    lineHeight: 17,
    width: 221,
    height: 20,
    color: Color.colorSeagreen,
    fontSize: FontSize.smallTextRegular_size,
    textAlign: "left",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  welcomeToWealthwiz1: {
    color: Color.colorSeagreen,
  },
  user: {
    color: Color.vibrantGreen,
  },
  welcomeToWealthwizContainer: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -1,
    lineHeight: 32,
    fontWeight: "500",
    width: 229,
    height: 128,
    top: 0,
  },
  welcomeToWealthwiz: {
    left: 25,
    width: 234,
    height: 128,
  },
  bank1Icon: {
    marginLeft: 55.5,
    height: 128,
    width: 134,
    left: "50%",
  },
  homePage2: {
    backgroundColor: Color.black0,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage;
