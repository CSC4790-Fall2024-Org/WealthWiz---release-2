import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/NavBar";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const ProfilePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profilePage}>
      <Image
        style={styles.profilePageChild}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <StatusBar style={styles.backgroundIconPosition} translucent={true} />
      <View style={[styles.lineParent, styles.parentFlexBox]}>
        <View style={styles.frameChild} />
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={styles.hoursParent}>
            <Text style={[styles.hours, styles.hoursTypo]}>2+ hours</Text>
            <Text style={styles.totalLearn}>Total Learn</Text>
          </View>
          <View style={styles.frameItem} />
          <View style={styles.hoursParent}>
            <Text style={[styles.hours, styles.hoursTypo]}>20</Text>
            <Text style={styles.totalLearn}>Achivements</Text>
          </View>
          <View style={styles.frameItem} />
          <View style={styles.hoursParent}>
            <Text style={[styles.hours, styles.hoursTypo]}>2</Text>
            <Text style={styles.totalLearn}>Completed Courses</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.notePencil}
        onPress={() => navigation.navigate("ProfilePageEdit")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/note-pencil.png")}
        />
      </Pressable>
      <View style={styles.nameusername}>
        <Text style={[styles.johnDoe, styles.hoursTypo]}>John Doe</Text>
        <Text style={styles.username}>@username</Text>
      </View>
      <ImageBackground
        style={styles.profilePicIcon}
        resizeMode="cover"
        source={require("../assets/profilepic.png")}
      />
      <Pressable
        style={[styles.logoutAccount, styles.parentPosition]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.logoutAccount1}>Logout Account</Text>
      </Pressable>
      <NavBar
        navBarPosition="absolute"
        navBarMarginLeft="unset"
        navBarTop={49}
        navBarLeft={33}
        showIcon={false}
      />
      <View style={[styles.inputFieldParent, styles.parentPosition]}>
        <View style={styles.inputField}>
          <Text style={[styles.email, styles.emailTypo]}>Email</Text>
          <View style={styles.exampleemailcomWrapper}>
            <Text style={[styles.exampleemailcom, styles.emailTypo]}>
              example@email.com
            </Text>
          </View>
        </View>
        <View style={styles.inputField}>
          <Text style={[styles.email, styles.emailTypo]}>Age</Text>
          <View style={styles.exampleemailcomWrapper}>
            <Text style={[styles.exampleemailcom, styles.emailTypo]}>21</Text>
          </View>
        </View>
        <View style={styles.inputField}>
          <Text style={[styles.email, styles.emailTypo]}>Phone Number</Text>
          <View style={styles.exampleemailcomWrapper}>
            <Text style={[styles.exampleemailcom, styles.emailTypo]}>
              (xxx)-xxx-xxxx
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  hoursTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.extraLargeTextRegular,
    lineHeight: 26,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  parentPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
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
    fontFamily: FontFamily.titleCaptionCaption112,
    lineHeight: 16,
    textDecoration: "underline",
    top: "66%",
    left: "0%",
    justifyContent: "center",
    display: "flex",
    fontSize: FontSize.smallTextRegular_size,
    textAlign: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  learnLayout: {
    width: "25.06%",
    height: 50,
    top: 0,
    position: "absolute",
  },
  emailTypo: {
    lineHeight: 22,
    fontSize: FontSize.largeTextMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  profilePageChild: {
    top: -274,
    left: -296,
    width: 760,
    height: 691,
    position: "absolute",
  },
  frameChild: {
    borderColor: Color.colorGainsboro_400,
    borderTopWidth: 1,
    width: 301,
    height: 1,
    borderStyle: "solid",
  },
  hours: {
    fontSize: FontSize.extraLargeTextRegular_size,
    letterSpacing: -1,
  },
  totalLearn: {
    fontSize: FontSize.extraSmallTextRegular_size,
    lineHeight: 16,
    color: Color.colorGray_200,
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  hoursParent: {
    gap: Gap.gap_xs,
    alignItems: "center",
  },
  frameItem: {
    borderColor: Color.colorGainsboro_200,
    borderRightWidth: 1,
    width: 1,
    height: 25,
    borderStyle: "solid",
  },
  frameParent: {
    width: 296,
    flexDirection: "row",
  },
  lineParent: {
    marginLeft: -159.5,
    top: 241,
    width: 320,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  notePencil: {
    left: "80.66%",
    top: "17.49%",
    right: "12.98%",
    bottom: "79.58%",
    width: "6.36%",
    height: "2.93%",
    position: "absolute",
  },
  johnDoe: {
    fontSize: FontSize.doubleExtraLargeTextRegular_size,
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textShadowOffset: {
      width: 0,
      height: 8,
    },
    textShadowRadius: 20,
  },
  username: {
    lineHeight: 18,
    fontSize: FontSize.smallTextRegular_size,
    color: Color.colorGray_200,
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  nameusername: {
    top: 137,
    left: 136,
    gap: 6,
    position: "absolute",
  },
  profilePicIcon: {
    top: 121,
    left: 43,
    width: 83,
    height: 83,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  logoutAccount1: {
    marginLeft: -67.5,
    fontSize: FontSize.mediumTextRegular_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    color: "#fb6d64",
    height: 28,
    width: 134,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  logoutAccount: {
    top: 720,
  },
  email: {
    fontWeight: "500",
    color: Color.base100,
  },
  exampleemailcom: {
    letterSpacing: 0,
    color: Color.base80,
  },
  exampleemailcomWrapper: {
    width: 327,
    padding: Padding.p_base,
    height: 31,
    borderRadius: Border.br_21xl,
    flexDirection: "row",
    alignItems: "center",
  },
  inputField: {
    height: 61,
    gap: Gap.gap_md,
  },
  inputFieldParent: {
    marginLeft: -163.5,
    top: 317,
    gap: 10,
  },
  profilePage: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfilePage;
