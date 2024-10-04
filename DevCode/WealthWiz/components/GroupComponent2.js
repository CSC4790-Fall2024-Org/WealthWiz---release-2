import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Gap } from "../GlobalStyles";

const GroupComponent2 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupBorder]} />
      <View style={[styles.groupItem, styles.groupBorder]} />
      <Text style={[styles.perfectionist, styles.perfectionistTypo]}>
        Perfectionist
      </Text>
      <Text style={[styles.youHaveScored, styles.perfectionistTypo]}>
        you have scored 100% on quizzes 20 times.
      </Text>
      <View style={styles.frameWrapper}>
        <View style={styles.starParent}>
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
  groupBorder: {
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 92,
    position: "absolute",
  },
  perfectionistTypo: {
    textAlign: "left",
    color: Color.black0,
    fontFamily: FontFamily.extraLargeTextRegular,
    left: 88,
    position: "absolute",
  },
  starIconLayout: {
    width: 18,
    height: 18,
  },
  groupChild: {
    backgroundColor: Color.colorLightseagreen,
    width: 300,
  },
  groupItem: {
    backgroundColor: Color.colorSteelblue,
    width: 312,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  perfectionist: {
    top: 13,
    fontSize: FontSize.largeTextMedium_size,
    lineHeight: 22,
    fontWeight: "500",
    width: 109,
    height: 25,
  },
  youHaveScored: {
    top: 35,
    fontSize: FontSize.smallTextRegular_size,
    lineHeight: 18,
    width: 186,
    height: 37,
  },
  starIcon: {
    overflow: "hidden",
  },
  starParent: {
    flexDirection: "row",
    gap: Gap.gap_xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameWrapper: {
    top: 7,
    left: 210,
    width: 94,
    height: 18,
    position: "absolute",
  },
  rectangleParent: {
    top: 589,
    left: 38,
    height: 92,
    position: "absolute",
    width: 312,
  },
});

export default GroupComponent2;
