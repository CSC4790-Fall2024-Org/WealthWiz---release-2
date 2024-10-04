import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ProfilePicture = () => {
  return (
    <View style={styles.profilePicture}>
      <Image
        style={[styles.profilePictureIcon, styles.aPosition]}
        contentFit="cover"
        source={require("../assets/profile-picture.png")}
      />
      <Text style={[styles.a, styles.aPosition]}>A</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aPosition: {
    left: 0,
    position: "absolute",
    width: 28,
  },
  profilePictureIcon: {
    top: 0,
    height: 28,
  },
  a: {
    top: 5,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.roboto,
    color: Color.black0,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicture: {
    height: 28,
    width: 28,
  },
});

export default ProfilePicture;
