import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../../GlobalStyles";
import NavBar1 from "../../components/NavBar1";

const StockMarketHome = () => {
  return (
    <View style={styles.stockmarkethome}>
      <View style={styles.learningPath}>
        <Image
          style={styles.learningPathChild}
          contentFit="cover"
          source={require("../../assets/group-6.png")}
        />
        <View style={[styles.coin13Parent, styles.coin13Position]}>
          <Image
            style={[styles.coin13Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/coin-13.png")}
          />
          <Text style={styles.level1}>LEVEL 1</Text>
        </View>
        <View style={[styles.coin14Parent, styles.parentPosition]}>
          <Image
            style={[styles.coin13Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/coin-14.png")}
          />
          <Text style={[styles.level2, styles.levelFlexBox]}>LEVEL 2</Text>
        </View>
        <View style={[styles.coin15Parent, styles.parentPosition]}>
          <Image
            style={[styles.coin13Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/coin-15.png")}
          />
          <Text style={[styles.level4, styles.levelFlexBox]}>LEVEL 4</Text>
        </View>
        <View style={[styles.bank4Parent, styles.bank4Position]}>
          <Image
            style={[styles.bank4Icon, styles.bank4Position]}
            contentFit="cover"
            source={require("../../assets/bank-4.png")}
          />
          <Text style={[styles.finalLevel, styles.levelFlexBox]}>
            FINAL LEVEL
          </Text>
        </View>
        <View style={[styles.coin13Group, styles.coin13Position]}>
          <Image
            style={[styles.coin13Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/coin-14.png")}
          />
          <Text style={[styles.level3, styles.levelFlexBox]}>LEVEL 3</Text>
        </View>
      </View>
      <View style={[styles.description, styles.descriptionLayout]}>
        <Text style={styles.theStockMarket}>The Stock Market</Text>
        <Text style={[styles.aStockMarket, styles.descriptionLayout]}>
          A stock market is a place where companies raise capital by selling
          shares of stock to investors. Most stocks give shareholders voting
          rights and a residual claim on corporate earnings in the form of
          capital gains and dividends.
        </Text>
      </View>
      <NavBar1 />
    </View>
  );
};

const styles = StyleSheet.create({
  coin13Position: {
    left: "0%",
    right: "70.25%",
    width: "29.75%",
    height: "22.4%",
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    top: "13.39%",
    height: "86.61%",
    maxHeight: "100%",
  },
  parentPosition: {
    left: "70.25%",
    right: "0%",
    width: "29.75%",
    height: "22.4%",
    position: "absolute",
  },
  levelFlexBox: {
    opacity: 0.25,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.extraLargeTextRegular,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  bank4Position: {
    width: 97,
    bottom: "0%",
    left: "50%",
    position: "absolute",
  },
  descriptionLayout: {
    width: 329,
    position: "absolute",
  },
  learningPathChild: {
    height: "71.66%",
    marginLeft: -83.5,
    top: "15.2%",
    bottom: "13.14%",
    width: 167,
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  coin13Icon: {
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    overflow: "hidden",
    top: "13.39%",
    height: "86.61%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  level1: {
    height: 20,
    lineHeight: 20,
    width: 54,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.extraLargeTextRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    top: 0,
    marginLeft: -26.5,
    left: "50%",
    position: "absolute",
  },
  coin13Parent: {
    top: "0%",
    bottom: "77.6%",
  },
  level2: {
    width: 54,
    opacity: 0.25,
    marginLeft: -26.5,
  },
  coin14Parent: {
    top: "19.4%",
    bottom: "58.2%",
  },
  level4: {
    marginLeft: -25.5,
    width: 54,
    opacity: 0.25,
  },
  coin15Parent: {
    top: "58.2%",
    bottom: "19.4%",
  },
  bank4Icon: {
    marginLeft: -48.5,
    overflow: "hidden",
    top: "13.39%",
    height: "86.61%",
    maxHeight: "100%",
    width: 97,
  },
  finalLevel: {
    marginLeft: -40.5,
    width: 81,
  },
  bank4Parent: {
    marginLeft: -163,
    top: "77.6%",
    width: 97,
    height: "22.4%",
  },
  level3: {
    marginLeft: -28.5,
    width: 54,
    opacity: 0.25,
  },
  coin13Group: {
    top: "38.8%",
    bottom: "38.8%",
  },
  learningPath: {
    height: "58.69%",
    marginLeft: -163.5,
    top: "33.27%",
    bottom: "8.04%",
    width: 326,
    left: "50%",
    position: "absolute",
  },
  theStockMarket: {
    marginLeft: -109,
    fontSize: FontSize.size_13xl,
    lineHeight: 30,
    width: 218,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    top: 0,
    color: Color.colorWhite,
    fontFamily: FontFamily.extraLargeTextRegular,
    left: "50%",
    position: "absolute",
  },
  aStockMarket: {
    top: 92,
    left: 0,
    lineHeight: 17,
    textAlign: "left",
    height: 91,
    color: Color.colorWhite,
    fontFamily: FontFamily.extraLargeTextRegular,
    fontSize: FontSize.size_xs,
    width: 329,
  },
  description: {
    marginLeft: -165,
    top: 69,
    height: 183,
    left: "50%",
  },
  stockmarkethome: {
    backgroundColor: "#3d8e67",
    flex: 1,
    height: 852,
    width: "100%",
  },
});

export default StockMarketHome;