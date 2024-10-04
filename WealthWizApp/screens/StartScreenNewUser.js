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
            <Text style={styles.buttonLogin}>Login</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.register}
          onPress={() => navigation.navigate("Register")}
        >
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonRegister}>Register</Text>
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
    marginRight: 30,
    backgroundColor: Color.black0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  register: {
    padding: Padding.p_3xs,
    height: 58,
    width: 131,
    marginLeft: 30,
    borderRadius: Border.br_21xl,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: "solid",
    borderColor: Color.black0,
    borderWidth: 2,
  },
  buttonLogin: {
    fontSize: FontSize.extraLargeTextRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
    color: Color.colorSeagreen,
  },
  buttonRegister: {
    fontSize: FontSize.extraLargeTextRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
    color: Color.black0,
  },
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default StartScreen2NewUser;