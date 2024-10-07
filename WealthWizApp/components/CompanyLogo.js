import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const CompanyLogo = () => {
  return (
    <View style={styles.companyLogo}>
      <View style={styles.companyLogoChild} />
      <Text style={styles.text}>✌</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  companyLogoChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorLavenderblush,
    position: "absolute",
  },
  text: {
    top: "27.03%",
    left: "27.03%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.roboto,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  companyLogo: {
    width: 37,
    height: 37,
  },
});

export default CompanyLogo;
