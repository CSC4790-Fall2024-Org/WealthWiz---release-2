import * as React from "react";
import { useEffect } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from '@react-navigation/native';
import Animated, { withSpring, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";
import BankAnimation from "./assets/BankAnimation.json";
import LottieView from "lottie-react-native";

const StartScreenNewUser = () => {
  const navigation = useNavigation();

  let bankAnimation;

  useEffect(() => {
    bankAnimation.play();
  },[]);

  useEffect(() => {
    // Delay the navigation for 800ms 
    setTimeout(() => {
      navigation.navigate('StartScreen2NewUser');
    }, 800);  // 800ms delay before navigating
  }, []);

  return (
    <View style={styles.startScreenNewUser}>
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
      <LottieView
        ref={(animation) => {
          bankAnimation = animation;
        }}
        source={require('./assets/BankAnimation.json')}
        autoPlay={true}
        loop={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginPosition: {
    padding: Padding.p_3xs,
    height: 58,
    width: 131,
    borderRadius: Border.br_21xl,
    marginTop: 426,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  buttonTypo: {
    lineHeight: 26,
    letterSpacing: -1,
    fontSize: FontSize.extraLargeTextRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  wealthwiz: {
    marginTop: -22.5,
    marginLeft: -7.5,
    fontSize: FontSize.size_21xl,
    letterSpacing: 0,
    lineHeight: 20,
    color: Color.colorLightgray_100,
    display: "flex",
    width: 235,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
    height: 45,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameText: {
    marginTop: 64,
    marginLeft: -116.5,
    width: 15,
    height: 45,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  frameLogoIcon: {
    marginTop: -117.2,
    marginLeft: -79.5,
    width: 159,
    height: 164,
    left: "50%",
    top: "50%",
    position: "absolute",
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
  startScreenNewUser: {
    backgroundColor: Color.colorSeagreen,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default StartScreenNewUser;