import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar1 from "../components/NavBar1";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Register1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register2}>
      <Image
        style={styles.register2Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={[styles.login, styles.loginFlexBox]}
        onPress={() => navigation.navigate("Register3")}
      >
        <View style={styles.loginFlexBox}>
          <Text style={[styles.createNewAccount, styles.createTypo]}>
            Create New Account
          </Text>
        </View>
      </Pressable>
      <StatusBar style={styles.loginPosition} translucent={true} />
      <View style={styles.createProfile}>
        <View style={[styles.headerRegister, styles.headerRegisterPosition]}>
          <Text style={[styles.createYourProfile, styles.nowClr]}>
            Create Your Profile
          </Text>
          <Text style={[styles.now, styles.nowTypo]}>Now!</Text>
          <Text style={[styles.createAProfile, styles.nowTypo]}>
            Create a profile to save your progress and begin learning for free
            today!
          </Text>
        </View>
      </View>
      <ImageBackground
        style={[styles.bank1Icon, styles.loginPosition]}
        resizeMode="cover"
        source={require("../assets/bank1.png")}
      />
      <NavBar1 />
    </View>
  );
};

const styles = StyleSheet.create({
  loginFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  createTypo: {
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  loginPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  headerRegisterPosition: {
    left: 0,
    top: 0,
    width: 309,
    position: "absolute",
  },
  nowClr: {
    color: Color.colorDarkslategray_200,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_13xl,
  },
  nowTypo: {
    textAlign: "left",
    fontFamily: FontFamily.extraLargeTextRegular,
    position: "absolute",
  },
  register2Child: {
    top: -242,
    left: -156,
    width: 797,
    height: 719,
    position: "absolute",
  },
  createNewAccount: {
    fontSize: FontSize.extraLargeTextRegular_size,
    letterSpacing: -1,
    lineHeight: 26,
    color: Color.black0,
  },
  login: {
    marginTop: 278,
    marginLeft: -156.5,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSeagreen,
    width: 312,
    height: 58,
    justifyContent: "center",
    padding: Padding.p_3xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  createYourProfile: {
    height: 25,
    left: 0,
    top: 0,
    width: 309,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  now: {
    top: 37,
    left: 9,
    fontWeight: "600",
    width: 203,
    height: 27,
    color: Color.colorDarkslategray_200,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_13xl,
  },
  createAProfile: {
    top: 92,
    left: 13,
    fontSize: FontSize.mediumTextRegular_size,
    lineHeight: 20,
    color: Color.colorDarkgray,
    width: 286,
    height: 74,
  },
  headerRegister: {
    height: 166,
  },
  createProfile: {
    top: 504,
    left: 33,
    height: 166,
    width: 309,
    position: "absolute",
  },
  bank1Icon: {
    marginTop: -377,
    marginLeft: -70.5,
    width: 418,
    height: 400,
  },
  register2: {
    backgroundColor: Color.black0,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Register1;
