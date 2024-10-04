import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, StatusBar } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Register = () => {
  return (
    <View style={styles.register}>
      <Image
        style={styles.registerChild}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Pressable style={[styles.login, styles.loginFlexBox]}>
        <View style={styles.loginFlexBox}>
          <Text style={[styles.createNewAccount, styles.createTypo]}>
            Create New Account
          </Text>
        </View>
      </Pressable>
      <View style={styles.createProfile}>
        <View style={[styles.headerRegister, styles.headerRegisterPosition]}>
          <Text style={[styles.createYourProfile, styles.nowClr]}>
            Create Your Profile
          </Text>
          <Text style={[styles.now, styles.nowTypo]}>Now!</Text>
          <Text style={[styles.createAProfile, styles.nowTypo]}>
            Create a profile to save your learning progress and keep learning
            for free!
          </Text>
        </View>
      </View>
      <StatusBar style={styles.loginPosition} translucent={true} />
      <Image
        style={[styles.bank1Icon, styles.loginPosition]}
        contentFit="cover"
        source={require("../assets/bank1.png")}
      />
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
  headerRegisterPosition: {
    width: 309,
    left: 0,
    top: 0,
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
  loginPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  registerChild: {
    top: -242,
    left: 377,
    width: 264,
    height: 238,
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
    width: 309,
    left: 0,
    top: 0,
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
    width: 7,
    height: 166,
    position: "absolute",
    overflow: "hidden",
  },
  bank1Icon: {
    marginTop: -377,
    marginLeft: -70.5,
    width: 418,
    height: 400,
  },
  register: {
    backgroundColor: Color.black0,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Register;
