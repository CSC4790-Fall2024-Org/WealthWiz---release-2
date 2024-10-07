import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Gap } from "../GlobalStyles";

const GroupComponent1 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupBorder]} />
      <View style={[styles.groupItem, styles.groupBorder]} />
      <Image
        style={[styles.image39Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-39.png")}
      />
      <Text style={[styles.ambitious, styles.ambitiousTypo]}>Ambitious</Text>
      <Text style={[styles.youHaveAchieved, styles.ambitiousTypo]}>
        You have achieved 15 milestones.
      </Text>
      <View style={styles.frameWrapper}>
        <View style={[styles.starParent, styles.starParentPosition]}>
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
      <View style={[styles.ellipseParent, styles.groupInnerLayout]}>
        <Image
          style={[styles.groupInner, styles.groupInnerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <ImageBackground
          style={[styles.image26Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image26.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupBorder: {
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    backgroundColor: Color.colorLightseagreen,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 92,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_106xl,
    position: "absolute",
  },
  ambitiousTypo: {
    textAlign: "left",
    color: Color.black0,
    fontFamily: FontFamily.extraLargeTextRegular,
    left: 88,
    position: "absolute",
  },
  starParentPosition: {
    left: 0,
    top: 0,
  },
  starIconLayout: {
    width: 18,
    height: 18,
  },
  groupInnerLayout: {
    height: 66,
    width: 66,
    position: "absolute",
  },
  groupChild: {
    width: 300,
  },
  groupItem: {
    width: 315,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    backgroundColor: Color.colorLightseagreen,
    borderRadius: Border.br_5xs,
  },
  image39Icon: {
    top: 16,
    left: 16,
    width: 56,
    height: 58,
  },
  ambitious: {
    fontSize: FontSize.largeTextMedium_size,
    lineHeight: 22,
    fontWeight: "500",
    width: 89,
    height: 25,
    top: 13,
  },
  youHaveAchieved: {
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
    position: "absolute",
    left: 0,
    top: 0,
  },
  frameWrapper: {
    top: 7,
    left: 210,
    width: 94,
    height: 18,
    position: "absolute",
  },
  groupInner: {
    left: 0,
    top: 0,
  },
  image26Icon: {
    marginTop: -30,
    marginLeft: -30,
    top: "50%",
    left: "50%",
    width: 60,
    height: 60,
  },
  ellipseParent: {
    left: 12,
    top: 13,
  },
  rectangleParent: {
    top: 478,
    left: 38,
    height: 92,
    width: 315,
    position: "absolute",
  },
});

export default GroupComponent1;
