import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ToggleButton from "./ToggleButton";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Settings = ({ onClose }) => {
  return (
    <View style={styles.settings}>
      <View style={styles.settingsChild} />
      <Text style={styles.otherSettings}>Other Settings</Text>
      <View style={styles.frameParent}>
        <View style={styles.darkModeParent}>
          <Text style={[styles.darkMode, styles.darkModeTypo]}>Dark Mode</Text>
          <ToggleButton />
        </View>
        <Pressable style={styles.darkModeParent}>
          <Text style={[styles.darkMode, styles.darkModeTypo]}>
            Notifications
          </Text>
          <Image
            style={styles.caretrightIcon}
            contentFit="cover"
            source={require("../assets/caretright.png")}
          />
        </Pressable>
        <Pressable style={styles.darkModeParent}>
          <Text style={[styles.darkMode, styles.darkModeTypo]}>Text Size</Text>
          <Image
            style={styles.caretrightIcon}
            contentFit="cover"
            source={require("../assets/caretright.png")}
          />
        </Pressable>
        <Pressable style={styles.darkModeParent}>
          <Text style={[styles.soundAndVolume, styles.darkModeTypo]}>
            Sound And Volume
          </Text>
          <Image
            style={styles.caretrightIcon}
            contentFit="cover"
            source={require("../assets/caretright.png")}
          />
        </Pressable>
        <Pressable style={styles.darkModeParent}>
          <Text style={[styles.darkMode, styles.darkModeTypo]}>
            Privacy Policy
          </Text>
          <Image
            style={styles.caretrightIcon}
            contentFit="cover"
            source={require("../assets/caretright.png")}
          />
        </Pressable>
        <Pressable style={styles.darkModeParent}>
          <Text style={[styles.soundAndVolume, styles.darkModeTypo]}>
            Terms and Conditions
          </Text>
          <Image
            style={styles.caretrightIcon}
            contentFit="cover"
            source={require("../assets/caretright.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  darkModeTypo: {
    height: 28,
    textAlign: "left",
    color: Color.colorGray_500,
    fontWeight: "500",
    fontSize: FontSize.mediumTextRegular_size,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppins,
  },
  settingsChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.black0,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_400,
    borderWidth: 1,
    position: "absolute",
  },
  otherSettings: {
    height: "5.57%",
    width: "34%",
    top: "2.39%",
    left: "4.33%",
    fontSize: FontSize.smallTextRegular_size,
    color: "#898a8d",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  darkMode: {
    width: 134,
  },
  darkModeParent: {
    width: 257,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  caretrightIcon: {
    width: 20,
    height: 20,
  },
  soundAndVolume: {
    width: 169,
  },
  frameParent: {
    height: "84.35%",
    width: "85.67%",
    top: "12.2%",
    right: "4%",
    bottom: "3.45%",
    left: "10.33%",
    gap: 30,
    position: "absolute",
  },
  settings: {
    width: 300,
    height: 377,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Settings;
