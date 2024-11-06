import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { Image } from "expo-image";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("")}
      >
      <Image
        style={styles.podiumIcon}
        contentFit="cover"
        source={require("../assets/podium.png")}
      />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("HomePage")}
      >
      <Image
        style={styles.bankIcon}
        contentFit="cover"
        source={require("../assets/bank.png")}
      />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("")}
      >
      <Image
        style={styles.profileIcon}
        contentFit="cover"
        source={require("../assets/profile.png")}
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Color.black0, // Adjust the background color to your theme
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray, // Border for separation
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: Color.colorWhite, // Adjust text color as needed
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  bankIcon: {
    height: 54,
    width: 54,
    bottom: 20,
  },
  profileIcon: {
    height: 52,
    width: 52,
    bottom: 20,
  },
  podiumIcon: {
    height: 78,
    width: 58,
    bottom: 20,
  },
});

export default Menu;