import * as React from "react";
import { useEffect } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";
import LottieView from "lottie-react-native";

const StartScreen2NewUser = () => {
  const navigation = useNavigation();
  let bankAnimation;

  useEffect(() => {
    bankAnimation.play();
  }, []);

  return (
    <View style={styles.startScreen2NewUser}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <LottieView
        style={styles.logo}
        contentFit="cover"
        ref={(animation) => {
          bankAnimation = animation;
        }}
        source={require('../assets/BankAnimation.json')}
        autoPlay={true}
        loop={false}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <View style={styles.buttonWrapper}>
            <Text style={[styles.button, styles.buttonTypo]}>Login</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.register}
          onPress={() => navigation.navigate("Register")}
        >
          <View style={styles.buttonWrapper}>
            <Text style={[styles.button1, styles.buttonTypo]}>Register</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  startScreen2NewUser: {
    backgroundColor: Color.colorSeagreen,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 232,
    height: 222,
    marginTop: 250,
    marginBottom: 250,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  login: {
    padding: Padding.p_3xs,
    height: 58,
    width: 131,
    borderRadius: Border.br_21xl,
    marginRight: 30, // Add space to the right of the Login button
    backgroundColor: Color.black0,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  register: {
    borderStyle: "solid",
    borderColor: Color.black0,
    borderWidth: 2,
    padding: Padding.p_3xs,
    height: 58,
    width: 131,
    marginLeft: 30, // Add space to the right of the Login button
    borderRadius: Border.br_21xl,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  buttonTypo: {
    lineHeight: 26,
    letterSpacing: -1,
    fontSize: FontSize.extraLargeTextRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  button: {
    color: Color.colorSeagreen,
    textAlign: "center",
  },
  button1: {
    color: Color.black0,
    textAlign: "center",
  },
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default StartScreen2NewUser;