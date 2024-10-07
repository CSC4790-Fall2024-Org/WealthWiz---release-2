import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FooterButton = ({ buttonText }) => {
  return (
    <Pressable style={styles.footerButton}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: FontSize.smallTextRegular_size,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    color: Color.colorGray_300,
    textAlign: "center",
  },
  footerButton: {
    borderRadius: Border.br_11xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
  },
});

export default FooterButton;
