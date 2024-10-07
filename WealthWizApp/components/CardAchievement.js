import * as React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize, Gap } from "../GlobalStyles";

const CardAchievement = () => {
  return (
    <View style={[styles.cardAchievement1, styles.cardLayout]}>
      <View style={[styles.cardAchievement1Child, styles.childPosition]} />
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <ImageBackground
          style={styles.image41Icon}
          resizeMode="cover"
          source={require("../assets/image41.png")}
        />
      </View>
      <Text style={[styles.studious, styles.studiousTypo]}>Studious</Text>
      <Text style={[styles.youHaveCompleted, styles.studiousTypo]}>
        You have completed this lesson 10 times.
      </Text>
      <View style={styles.cardAchievement1Inner}>
        <View style={[styles.starParent, styles.childPosition]}>
          <Image
            style={[styles.starIcon, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.starIcon, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={styles.starIconLayout}
            contentFit="cover"
            source={require("../assets/star1.png")}
          />
          <Image
            style={styles.starIconLayout}
            contentFit="cover"
            source={require("../assets/star1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 92,
    width: 317,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    height: 66,
    width: 66,
    position: "absolute",
  },
  studiousTypo: {
    textAlign: "left",
    color: Color.black0,
    fontFamily: FontFamily.extraLargeTextRegular,
    left: 93,
    position: "absolute",
  },
  starIconLayout: {
    width: 18,
    height: 18,
  },
  cardAchievement1Child: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorLightskyblue,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderWidth: 1,
    height: 92,
    width: 317,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  image41Icon: {
    top: 3,
    left: 3,
    borderRadius: Border.br_106xl,
    width: 60,
    height: 60,
    position: "absolute",
  },
  ellipseParent: {
    top: 13,
    left: 13,
  },
  studious: {
    top: 10,
    fontSize: FontSize.extraLargeTextRegular_size,
    letterSpacing: -1,
    lineHeight: 26,
    fontWeight: "500",
    width: 80,
    height: 25,
  },
  youHaveCompleted: {
    top: 35,
    fontSize: FontSize.smallTextRegular_size,
    lineHeight: 18,
    width: 197,
    height: 37,
  },
  starIcon: {
    overflow: "hidden",
  },
  starParent: {
    flexDirection: "row",
    gap: Gap.gap_xs,
    position: "absolute",
  },
  cardAchievement1Inner: {
    top: 7,
    left: 210,
    width: 94,
    height: 18,
    position: "absolute",
  },
  cardAchievement1: {
    top: 256,
    left: 39,
  },
});

export default CardAchievement;
