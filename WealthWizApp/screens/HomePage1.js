import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, StatusBar, View, Pressable, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const HomePage1 = () => {
  return (
    <View style={styles.homePage}>
      <Image
        style={styles.coins1Icon}
        contentFit="cover"
        source={require("../assets/coins1.png")}
      />
      <StatusBar translucent={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "35.43%",
    height: "64%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  learn1Typo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.titleCaptionCaption112,
    lineHeight: 16,
    textDecoration: "underline",
    fontSize: FontSize.smallTextRegular_size,
    top: "66%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  learnLayout: {
    width: "25.06%",
    height: 50,
    top: 0,
    position: "absolute",
  },
  coins1Icon: {
    top: 852,
    left: 1,
    height: 393,
    width: 393,
    position: "absolute",
  },
  homePage: {
    backgroundColor: Color.black0,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage1;
