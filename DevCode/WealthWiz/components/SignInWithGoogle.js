import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import CompanyLogo from "./CompanyLogo";
import AccountOption from "./AccountOption";
import FooterButton from "./FooterButton";
import {
  Gap,
  FontSize,
  Color,
  FontFamily,
  Padding,
  Border,
} from "../GlobalStyles";

const SignInWithGoogle = ({ onClose }) => {
  return (
    <View style={styles.signInWithGoogle}>
      <View style={[styles.accountChoiceBox, styles.headerFlexBox]}>
        <View style={styles.title}>
          <View style={[styles.titleContents, styles.titleContentsFlexBox]}>
            <Image
              style={styles.googleLogoIcon}
              contentFit="cover"
              source={require("../assets/google-logo.png")}
            />
            <Text style={[styles.signInWith, styles.signInWithFlexBox]}>
              Sign in with Google
            </Text>
          </View>
          <View style={styles.pxBorderBottom} />
        </View>
        <View style={[styles.mainContent, styles.headerFlexBox]}>
          <View style={[styles.header, styles.headerFlexBox]}>
            <CompanyLogo />
            <View style={[styles.headerText, styles.headerTextFlexBox]}>
              <Text style={[styles.chooseAnAccount, styles.toContinueToClr]}>
                Choose an account
              </Text>
              <Text style={styles.toContinueToContainer}>
                <Text style={styles.toContinueToClr}>to continue to</Text>
                <Text style={[styles.wealthwiz, styles.wealthwizTypo]}>
                  {" "}
                  WealthWiz
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={[styles.accountsWrapper, styles.accountsWrapperSpaceBlock]}
          >
            <AccountOption />
            <AccountOption />
            <Pressable style={styles.title}>
              <View
                style={[
                  styles.anotherAccountOption1,
                  styles.titleContentsFlexBox,
                ]}
              >
                <Image
                  style={styles.accountIcon}
                  contentFit="cover"
                  source={require("../assets/account-icon.png")}
                />
                <Text style={[styles.useAnotherAccount, styles.wealthwizTypo]}>
                  Use another account
                </Text>
              </View>
              <View
                style={[
                  styles.pxBorderBottom1,
                  styles.accountsWrapperSpaceBlock,
                ]}
              >
                <View style={styles.pxBorderBottom} />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.signInWithFlexBox}>
            <Text
              style={styles.signInWithClr}
            >{`To continue, Google will share your name, email address, language preference, and profile picture with Company. Before using this app, you can review Company’s
`}</Text>
            <Text style={[styles.wealthwiz, styles.wealthwizTypo]}>
              privacy policy
            </Text>
            <Text style={styles.signInWithClr}>{` and `}</Text>
            <Text style={[styles.wealthwiz, styles.wealthwizTypo]}>
              terms of service
            </Text>
            <Text style={styles.signInWithClr}>.</Text>
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable style={[styles.languageOption, styles.headerTextFlexBox]}>
          <Text style={[styles.englishUnitedStates, styles.toContinueToClr]}>
            English (United States)
          </Text>
          <Image
            style={styles.arrowIcon}
            contentFit="cover"
            source={require("../assets/arrow.png")}
          />
        </Pressable>
        <View style={styles.rightButtons}>
          <FooterButton buttonText="Help" />
          <FooterButton buttonText="Privacy" />
          <FooterButton buttonText="Terms" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  titleContentsFlexBox: {
    gap: Gap.gap_lg,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  signInWithFlexBox: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.mediumTextRegular_size,
    flex: 1,
  },
  headerTextFlexBox: {
    gap: Gap.gap_md,
    justifyContent: "center",
    alignItems: "center",
  },
  toContinueToClr: {
    color: Color.colorGray_400,
    fontFamily: FontFamily.roboto,
  },
  wealthwizTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
  },
  accountsWrapperSpaceBlock: {
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  googleLogoIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  signInWith: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.roboto,
  },
  titleContents: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
  pxBorderBottom: {
    backgroundColor: Color.colorGainsboro_300,
    height: 1,
    alignSelf: "stretch",
  },
  title: {
    alignSelf: "stretch",
  },
  chooseAnAccount: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    alignSelf: "stretch",
  },
  wealthwiz: {
    color: Color.colorRoyalblue_100,
  },
  toContinueToContainer: {
    fontSize: FontSize.largeTextMedium_size,
    lineHeight: 24,
    textAlign: "center",
    alignSelf: "stretch",
  },
  headerText: {
    alignSelf: "stretch",
  },
  header: {
    paddingTop: Padding.p_9xs,
    paddingHorizontal: Padding.p_21xl,
    gap: Gap.gap_xl,
  },
  accountIcon: {
    width: 28,
    height: 20,
  },
  useAnotherAccount: {
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.mediumTextRegular_size,
    flex: 1,
  },
  anotherAccountOption1: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_21xl,
  },
  pxBorderBottom1: {
    paddingHorizontal: Padding.p_21xl,
  },
  accountsWrapper: {
    paddingHorizontal: 1,
  },
  mainContent: {
    gap: 24,
  },
  signInWithClr: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.roboto,
  },
  description: {
    paddingTop: 9,
    paddingBottom: 3,
    paddingHorizontal: Padding.p_21xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  accountChoiceBox: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.black0,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_300,
    borderWidth: 1,
    paddingBottom: 36,
    gap: 32,
  },
  englishUnitedStates: {
    fontSize: FontSize.smallTextRegular_size,
    lineHeight: 17,
    textAlign: "center",
  },
  arrowIcon: {
    width: 8,
    height: 4,
  },
  languageOption: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
  },
  rightButtons: {
    flexDirection: "row",
  },
  footer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  signInWithGoogle: {
    maxWidth: "100%",
    maxHeight: "100%",
    gap: Gap.gap_xl,
    alignItems: "center",
  },
});

export default SignInWithGoogle;
