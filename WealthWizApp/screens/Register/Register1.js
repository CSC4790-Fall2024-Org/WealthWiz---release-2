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
import NavBar1 from "../../components/NavBar1";
import { FontFamily, Color, FontSize, Border, Padding } from "../../GlobalStyles";
import Button2 from "../../components/Button2";

const Register1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <NavBar1/>
      <Image
        style={styles.greencircle}
        source={require("../../assets/ellipse-1.png")}
      />
      <ImageBackground
        style={styles.bankIcon}
        resizeMode="cover"
        source={require("../../assets/bank-logo.png")}
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
      </View>
      <Button2
        title="Create New Account" 
        onPress={() => navigation.navigate("Register2")} 
        buttonColor={Color.colorSeagreen} 
        textColor={Color.black0} 
        height={65}
        width={350}
      />
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
    fontFamily: 'lexend-regular',
    fontSize: FontSize.size_13xl,
    color: Color.colorDarkslategray_200,
  },
  now: {
    textAlign: "left",
    fontSize: FontSize.size_13xl,
    color: Color.colorDarkslategray_200,
    marginBottom: 20,
    fontFamily: 'lexend-semibold',
  },
  createAProfile: {
    fontSize: FontSize.mediumTextRegular_size,
    fontFamily: 'lexend-regular',
    color: Color.colorDarkgray,
    textAlign: "left",
    marginBottom: 30,
    paddingRight: 80,
    lineHeight: 20,
  },
});

export default Register1;