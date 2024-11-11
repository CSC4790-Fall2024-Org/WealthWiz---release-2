import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TouchableOpacity, ScrollView, StatusBar, Dimensions } from "react-native";
import { Color, FontFamily, FontSize } from "../../GlobalStyles";
import NavBar1 from "../../components/NavBar1";
import { useNavigation } from "@react-navigation/native";

const StockMarketHome = () => {

  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content"/>
    <ScrollView style={{backgroundColor: "#3d8e67"}}>
    <View style={styles.stockmarkethome}>
      <Text style={styles.title}>The Stock Market</Text>
      <Text style={[styles.description, styles.descriptionLayout]}>
        A stock market is a place where companies raise capital by selling
        shares of stock to investors. Most stocks give shareholders voting
        rights and a residual claim on corporate earnings in the form of
        capital gains and dividends.
      </Text>
      <View style={styles.learningPath}>
        <Image
          style={styles.dottedLines}
          source={require("../../assets/group-6.png")}
          resizeMode="contain"
        />
        <View style={styles.coins}>
          <View style={styles.coin1}>
            <Text style={styles.levelText}>LEVEL 1</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("M1")}
            >
            <Image
              style={styles.iconLayout}
              source={require("../../assets/coin-13.png")}
              resizeMode="contain"
            />
            </TouchableOpacity>
          </View>
          <View style={styles.coin2}>
            <Text style={styles.levelText}>LEVEL 2</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("M2")}
            >
            <Image
              style={styles.iconLayout}
              source={require("../../assets/coin-14.png")}
              resizeMode="contain"
            />
            </TouchableOpacity>
          </View>
          <View style={styles.coin3}>
            <Text style={styles.levelText}>LEVEL 3</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("M3")}
            >
            <Image
              style={styles.iconLayout}
              source={require("../../assets/coin-14.png")}
              resizeMode="contain"
            />
            </TouchableOpacity>
          </View>
          <View style={styles.coin4}>
            <Text style={styles.levelText}>LEVEL 4</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("M4")}
            >
            <Image
              style={styles.iconLayout}
              source={require("../../assets/coin-14.png")}
              resizeMode="contain"
            />
            </TouchableOpacity>
          </View>
          <View style={styles.bank}>
            <Text style={styles.levelText}>FINAL LEVEL</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Quiz1")}
            >
            <Image
              style={styles.iconLayout}
              source={require("../../assets/bank.png")}
              resizeMode="contain"
            />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
    <NavBar1 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3d8e67",
  },
  stockmarkethome: {
    backgroundColor: Color.colorSeagreen,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingTop: "20%",
    fontSize: FontSize.size_13xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.extraLargeTextRegular,
    textAlign: "center",
    width: "40%",
    lineHeight: 30,

  },
  description: {
    paddingTop: "10%",
    color: Color.colorWhite,
    fontFamily: FontFamily.extraLargeTextRegular,
    fontSize: FontSize.size_xs,
    width: "85%",
  },
  learningPath: {
    top: "5%",
    paddingBottom: 10,
    width: "80%",
    height: 550,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 2.5,
    borderColor: '#CBD2DA',
  },
  dottedLines: {
    height: "70%",
    width: "90%",
    position: 'absolute',
  },
  coins: {
    zIndex: 1,
    height: "100%",
    width: "100%",
    alignItems: 'center',
  },
  coin1: {
    top: 30,
    height: "17%",
    width: "25%",
    alignItems: 'center',
    right: "33%",
  },
  button: {
    top: 5,
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  levelText: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.extraLargeTextRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  coin2: {
    top: 30,
    height: "17%",
    width: "25%",
    alignItems: 'center',
    left: "33%",
  },
  coin3: {
    top: 40,
    height: "17%",
    width: "25%",
    alignItems: 'center',
    right: "33%",
  },
  coin4: {
    top: 50,
    height: "17%",
    width: "25%",
    alignItems: 'center',
    left: "33%",
  },
  bank: {
    top: 50,
    height: "17%",
    width: "25%",
    alignItems: 'center',
    right: "33%",
    opacity: 0.25,
  },



  // coin13Position: {
  //   left: "0%",
  //   right: "70.25%",
  //   width: "29.75%",
  //   height: "22.4%",
  //   position: "relative",
  // },
  // parentPosition: {
  //   left: "70.25%",
  //   right: "0%",
  //   width: "29.75%",
  //   height: "22.4%",
  //   position: "absolute",
  // },
  // levelFlexBox: {
  //   opacity: 0.25,
  //   height: 20,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   display: "flex",
  //   textAlign: "center",
  //   color: Color.colorWhite,
  //   fontFamily: FontFamily.extraLargeTextRegular,
  //   lineHeight: 20,
  //   letterSpacing: 0,
  //   fontSize: FontSize.size_xs,
  //   top: 0,
  //   left: "50%",
  //   position: "absolute",
  // },
  // bank4Position: {
  //   width: 97,
  //   bottom: "0%",
  //   left: "50%",
  //   position: "absolute",
  // },
  // coin13Icon: {
  //   maxWidth: "100%",
  //   bottom: "0%",
  //   right: "0%",
  //   overflow: "hidden",
  //   top: "13.39%",
  //   height: "86.61%",
  //   left: "0%",
  //   position: "absolute",
  //   width: "100%",
  // },
  // level1: {
  //   height: 20,
  //   lineHeight: 20,
  //   width: 54,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   display: "flex",
  //   textAlign: "center",
  //   color: Color.colorWhite,
  //   fontFamily: FontFamily.extraLargeTextRegular,
  //   letterSpacing: 0,
  //   fontSize: FontSize.size_xs,
  //   top: 0,
  //   marginLeft: -26.5,
  //   left: "50%",
  //   position: "absolute",
  // },
  // level2: {
  //   width: 54,
  //   opacity: 0.25,
  //   marginLeft: -26.5,
  // },
  // coin14Parent: {
  //   top: "19.4%",
  //   bottom: "58.2%",
  // },
  // level4: {
  //   marginLeft: -25.5,
  //   width: 54,
  //   opacity: 0.25,
  // },
  // coin15Parent: {
  //   top: "58.2%",
  //   bottom: "19.4%",
  // },
  // bank4Icon: {
  //   marginLeft: -48.5,
  //   overflow: "hidden",
  //   top: "13.39%",
  //   height: "86.61%",
  //   maxHeight: "100%",
  //   width: 97,
  // },
  // finalLevel: {
  //   marginLeft: -40.5,
  //   width: 81,
  // },
  // bank4Parent: {
  //   marginLeft: -163,
  //   top: "77.6%",
  //   width: 97,
  //   height: "22.4%",
  // },
  // level3: {
  //   marginLeft: -28.5,
  //   width: 54,
  //   opacity: 0.25,
  // },
  // coin13Group: {
  //   top: "38.8%",
  //   bottom: "38.8%",
  // },
});

export default StockMarketHome;