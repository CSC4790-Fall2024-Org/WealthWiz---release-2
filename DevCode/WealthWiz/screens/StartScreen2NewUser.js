import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";
import Animated, { Easing, withSpring, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const StartScreen2NewUser = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startScreen2NewUser}>
      <Pressable
        style={[styles.login, styles.loginPosition]}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={styles.buttonWrapper}>
          <Text style={[styles.button, styles.buttonTypo]}>Login</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.register, styles.loginPosition]}
        onPress={() => navigation.navigate("Register")}
      >
        <View style={styles.buttonWrapper}>
          <Text style={[styles.button1, styles.buttonTypo]}>Register</Text>
        </View>
      </Pressable>
      <ImageBackground
        style={[styles.bank1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/bank1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  loginPosition: {
    padding: Padding.p_3xs,
    height: 58,
    width: 131,
    borderRadius: Border.br_21xl,
    marginTop: 321,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  buttonTypo: {
    lineHeight: 26,
    letterSpacing: -1,
    fontSize: FontSize.extraLargeTextRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  flareIcon: {
    marginLeft: -1003.5,
    top: -556,
    width: 2008,
    height: 1449,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  wealthwiz: {
    marginTop: -22.5,
    marginLeft: -117.5,
    fontSize: FontSize.size_21xl,
    letterSpacing: 0,
    lineHeight: 20,
    color: Color.colorLightgray_100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
    height: 45,
    width: 235,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  frameText: {
    marginTop: 64,
    marginLeft: -116.5,
    height: 45,
    width: 235,
    top: "50%",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  frameLogoIcon: {
    marginTop: -117.2,
    marginLeft: -79.5,
    width: 159,
    height: 164,
    overflow: "hidden",
  },
  button: {
    color: Color.colorSeagreen,
  },
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  login: {
    marginLeft: 24.5,
    backgroundColor: Color.black0,
  },
  button1: {
    color: Color.black0,
  },
  register: {
    marginLeft: -156.5,
    borderStyle: "solid",
    borderColor: Color.black0,
    borderWidth: 2,
  },
  bank1Icon: {
    marginTop: -377,
    marginLeft: 196.5,
    width: 418,
    height: 400,
  },
  startScreen2NewUser: {
    backgroundColor: Color.colorSeagreen,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default StartScreen2NewUser;
