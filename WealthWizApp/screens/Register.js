import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar1 from "../components/NavBar1";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <NavBar1/>
      <Image
        style={styles.greencircle}
        source={require("../assets/ellipse-1.png")}
      />
      <ImageBackground
        style={styles.bankIcon}
        resizeMode="cover"
        source={require("../assets/bank-logo.png")}
      />
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.createYourProfile}>
            Create Your Profile
          </Text>
          <Text style={styles.now}>Now!</Text>
          <Text style={styles.createAProfile}>
            Create a profile to save your progress and begin learning for free today!
          </Text>
        </View>
        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate("Register2")}
        >
          <Text style={[styles.createNewAccount, styles.createTypo]}>
            Create New Account
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  register: {
    backgroundColor: Color.black0,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 120,
    overflow: "hidden",
  },
  greencircle: {
    position: "absolute",
    width: 700,
    height: 700,
    top: -210,
    right: -200,
  },
  bankIcon: {
    position: "absolute",
    width: 418,
    height: 400,
    top: 50,
    left: 160,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 400,
    paddingHorizontal: 20,
  },
  createYourProfile: {
    textAlign: "left",
    fontFamily: FontFamily.extraLargeTextRegular,
    fontSize: FontSize.size_13xl,
    color: Color.colorDarkslategray_200,
  },
  now: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.size_13xl,
    color: Color.colorDarkslategray_200,
    marginBottom: 20,
  },
  createAProfile: {
    fontSize: FontSize.mediumTextRegular_size,
    color: Color.colorDarkgray,
    textAlign: "left",
    marginBottom: 30,
    paddingRight: 80,
    lineHeight: 20,
  },
  login: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSeagreen,
    width: 312,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_3xs,
    marginTop: 70,
  },
  createNewAccount: {
    fontSize: FontSize.extraLargeTextRegular_size,
    color: Color.black0,
    textAlign: "center",
  },
});

export default Register;