import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import ProfilePicture from "./ProfilePicture";
import { Padding, FontFamily, FontSize, Color, Gap } from "../GlobalStyles";

const AccountOption = () => {
  return (
    <Pressable style={styles.accountOption}>
      <View style={[styles.accountDetails, styles.accountDetailsSpaceBlock]}>
        <ProfilePicture />
        <View style={styles.accountInfo}>
          <Text style={[styles.accountName, styles.accountNameFlexBox]}>
            Account Name
          </Text>
          <Text style={[styles.emailgmailcom, styles.accountNameFlexBox]}>
            email@gmail.com
          </Text>
        </View>
      </View>
      <View style={[styles.pxBorderBottom, styles.accountDetailsSpaceBlock]}>
        <View style={styles.pxBorderBottomChild} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  accountDetailsSpaceBlock: {
    paddingHorizontal: Padding.p_21xl,
    alignSelf: "stretch",
  },
  accountNameFlexBox: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    alignSelf: "stretch",
  },
  accountName: {
    fontSize: FontSize.mediumTextRegular_size,
    lineHeight: 20,
    fontWeight: "500",
    color: Color.colorDarkslategray_100,
  },
  emailgmailcom: {
    fontSize: FontSize.smallTextRegular_size,
    lineHeight: 16,
    color: Color.colorDimgray_100,
  },
  accountInfo: {
    flex: 1,
  },
  accountDetails: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Padding.p_xs,
    gap: Gap.gap_lg,
  },
  pxBorderBottomChild: {
    backgroundColor: Color.colorGainsboro_300,
    height: 1,
    alignSelf: "stretch",
  },
  pxBorderBottom: {
    paddingVertical: 0,
  },
  accountOption: {
    alignSelf: "stretch",
  },
});

export default AccountOption;
