import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize, Gap } from "../GlobalStyles";

const GroupComponent = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <Text style={[styles.quickie, styles.quickieTypo]}>Quickie</Text>
      <Text style={[styles.youHaveCompleted, styles.quickieTypo]}>
        You have completed this quiz in less than 3 minutes, 10 times.
      </Text>
      <View style={[styles.ellipseParent, styles.groupItemLayout]}>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-12.png")}
        />
        <ImageBackground
          style={styles.image29Icon}
          resizeMode="cover"
          source={require("../assets/image29.png")}
        />
      </View>
      <View style={styles.frameWrapper}>
        <View style={[styles.starParent, styles.groupPosition]}>
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
  groupChildLayout: {
    height: 92,
    width: 315,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  quickieTypo: {
    textAlign: "left",
    color: Color.black0,
    fontFamily: FontFamily.extraLargeTextRegular,
    position: "absolute",
  },
  groupItemLayout: {
    height: 66,
    width: 66,
    position: "absolute",
  },
  starIconLayout: {
    width: 18,
    height: 18,
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGold,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderWidth: 1,
    height: 92,
    width: 315,
    position: "absolute",
  },
  quickie: {
    left: 93,
    fontSize: FontSize.largeTextMedium_size,
    lineHeight: 22,
    fontWeight: "500",
    width: 78,
    height: 25,
    top: 13,
  },
  youHaveCompleted: {
    top: 35,
    left: 92,
    fontSize: FontSize.smallTextRegular_size,
    lineHeight: 18,
    width: 216,
    height: 37,
  },
  groupItem: {
    left: 0,
    top: 0,
  },
  image29Icon: {
    top: 3,
    left: 3,
    borderRadius: Border.br_106xl,
    width: 60,
    height: 60,
    position: "absolute",
  },
  ellipseParent: {
    left: 13,
    top: 13,
  },
  starIcon: {
    overflow: "hidden",
  },
  starParent: {
    flexDirection: "row",
    gap: Gap.gap_xs,
    position: "absolute",
  },
  frameWrapper: {
    top: 7,
    left: 214,
    width: 94,
    height: 18,
    position: "absolute",
  },
  rectangleParent: {
    top: 367,
    left: 38,
  },
});

export default GroupComponent;
