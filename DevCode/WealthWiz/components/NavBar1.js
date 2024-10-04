import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border } from "../GlobalStyles";

const NavBar1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      <Pressable
        style={[styles.backButton, styles.menuChildPosition]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back-button.png")}
        />
      </Pressable>
      <View style={[styles.menu, styles.menuPosition]}>
        <Image
          style={[styles.menuChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-19.png")}
        />
        <Image
          style={[styles.button1Icon, styles.menuPosition]}
          contentFit="cover"
          source={require("../assets/button-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuChildPosition: {
    height: "95.45%",
    bottom: "2.27%",
    top: "2.27%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  menuPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  icon: {
    width: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "100%",
  },
  backButton: {
    left: "0%",
    right: "87.16%",
    width: "12.84%",
  },
  menuChild: {
    width: "95.45%",
    right: "2.27%",
    left: "2.27%",
    borderRadius: Border.br_xs,
    height: "95.45%",
    bottom: "2.27%",
    top: "2.27%",
    position: "absolute",
  },
  button1Icon: {
    right: "-100%",
    left: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
  menu: {
    width: "13.46%",
    right: "0%",
    left: "86.54%",
    display: "none",
  },
  navBar: {
    top: 49,
    left: 33,
    width: 327,
    height: 44,
    position: "absolute",
  },
});

export default NavBar1;
