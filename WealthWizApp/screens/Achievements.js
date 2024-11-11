import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import CardAchievement from "../components/CardAchievement";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import NavBar from "../components/NavBar";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import Menu from "../components/Menu";

const Achievements = () => {
  return (
    <View style={styles.container}>
    <View style={styles.achievements}>
      <StatusBar style={styles.childPosition} translucent={true} />
      <View style={[styles.cardTotalAchievement, styles.cardLayout]}>
        <View style={[styles.cardTotalAchievementChild, styles.cardLayout]} />
        <Image
          style={[styles.chartIcon, styles.chartIconPosition]}
          contentFit="cover"
          source={require("../assets/chart.png")}
        />
        <Text style={styles.text}>80 %</Text>
        <Text style={[styles.greatJobJohn, styles.greatJobJohnTypo]}>
          Great job, John! Complete your achievements now
        </Text>
      </View>
      <CardAchievement />
      <GroupComponent2 />
      <GroupComponent1 />
      <GroupComponent />
      <Text style={[styles.totalAchivements, styles.greatJobJohnTypo]}>
        Total Achivements : 20
      </Text>
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <ImageBackground
          style={styles.image30Icon}
          resizeMode="cover"
          source={require("../assets/image30.png")}
        />
      </View>
      <NavBar
        navBarPosition="absolute"
        navBarMarginLeft={-163.5}
        navBarTop={49}
        navBarLeft="50%"
        showIcon={false}
      />
    </View>
    <Menu/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  cardLayout: {
    height: 102,
    width: 317,
    position: "absolute",
  },
  chartIconPosition: {
    left: "50%",
    position: "absolute",
  },
  greatJobJohnTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.extraLargeTextRegular,
    position: "absolute",
  },
  groupChildLayout: {
    height: 65,
    width: 64,
    position: "absolute",
  },
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
    fontFamily: FontFamily.titleCaptionCaption112,
    lineHeight: 16,
    textDecoration: "underline",
    top: "66%",
    left: "0%",
    fontSize: FontSize.smallTextRegular_size,
    textAlign: "center",
    position: "absolute",
    width: "100%",
  },
  learnLayout: {
    width: "25.06%",
    height: 50,
    top: 0,
    position: "absolute",
  },
  cardTotalAchievementChild: {
    borderRadius: Border.br_11xs,
    borderStyle: "solid",
    borderColor: "#d4d1d1",
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  chartIcon: {
    marginTop: -32.6,
    marginLeft: -142.1,
    top: "50%",
    width: 73,
    height: 72,
  },
  text: {
    top: 42,
    left: 30,
    width: 45,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.extraLargeTextRegular,
    fontWeight: "500",
    lineHeight: 26,
    letterSpacing: -1,
    fontSize: FontSize.extraLargeTextRegular_size,
    position: "absolute",
  },
  greatJobJohn: {
    top: 45,
    left: 98,
    fontWeight: "300",
    width: 198,
    height: 38,
    fontSize: FontSize.smallTextRegular_size,
    textAlign: "left",
  },
  cardTotalAchievement: {
    top: 132,
    left: 39,
  },
  totalAchivements: {
    top: 150,
    left: 137,
    width: 183,
    height: 24,
    textAlign: "left",
    fontWeight: "500",
    lineHeight: 26,
    letterSpacing: -1,
    fontSize: FontSize.extraLargeTextRegular_size,
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  image30Icon: {
    top: 3,
    left: 3,
    borderRadius: Border.br_106xl,
    width: 58,
    height: 59,
    position: "absolute",
  },
  ellipseParent: {
    top: 602,
    left: 52,
  },
  achievements: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Achievements;
