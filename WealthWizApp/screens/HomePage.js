import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, ScrollView, StatusBar } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import Button from "../components/Button";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Menu from "../components/Menu";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const HomePage = () => { 
  const navigation = useNavigation();
  const [coins, setcoins] = useState(0);
  const [username, setUsername] = useState('user');  // State to store username

  const currentDay = new Date().toLocaleDateString("en-US", { weekday: "short" });

  const loadProgress = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const coinsAmount = userDoc.data().coins || {};
        setcoins(coinsAmount);
        setUsername(userDoc.data().username || '');  // Set username from Firestore
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadProgress();
    }, [])
  );

  return (

    <View style={styles.container}>
    <StatusBar barStyle="dark-content"/>
    <ScrollView style={{backgroundColor: "white"}}>
    <View style={styles.homepage}>

      <View style={styles.topPart}>
        <Text style={styles.home}>Home</Text>
        <View style={styles.coinCounter}>
          <Image
            style={styles.coinCounterIcon}
            contentFit="cover"
            source={require("../assets/coin-7.png")}
          />
          <Text style={styles.smallText}>{100*coins}</Text>
        </View>
      </View>
      
      <View style={styles.message}>
        <Text style={styles.greyText}>
          {`Welcome back, `}
        </Text>
        <Text style={[styles.goldText, { color: '#16a085' }]}>
          {username}
        </Text>
        <Text style={styles.greyText}>
          {`! You have `}
        </Text>
        <Text style={styles.goldText}>{1700-(100*coins)} coins</Text>
        <Text style={styles.greyText}> to earn today.</Text>
        <View style={styles.streakCoins}></View>
      </View>

      <View style={styles.coinsRow}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
              <View key={index} style={styles.coinContainer}>
                <Image
                  style={[
                    styles.coinIcon,
                    { opacity: currentDay === day && coins >= 1 ? 1.0 : 0.25 }
                  ]}
                  contentFit="cover"
                  source={require("../assets/coin-8.png")}
                />
                <Text
                  style={[
                    styles.smallText,
                    { opacity: currentDay === day && coins >= 1 ? 1.0 : 0.25 }
                  ]}
                >
                  {day === "Mon" ? "M" 
                   : day === "Tue" ? "T" 
                   : day === "Wed" ? "W" 
                   : day === "Thu" ? "Th" 
                   : day === "Fri" ? "F" 
                   : day === "Sat" ? "Sa" 
                   : "Su"}
                </Text>
              </View>
            ))}
          </View>

      <Text style={styles.coursesTitle}>Courses</Text>

      <View style={styles.courses}>
        <View style={styles.course}>
          <View style={styles.infoRow}>
            <View style={styles.titleRow}>
              <Text style={styles.titleText}>
                  THE STOCK MARKET
              </Text>
              <Text style={styles.levelText}>LEVEL 1</Text>
            </View>
            <Button 
              title="Continue" 
              onPress={() => navigation.navigate("StockMarketHome")} 
              buttonColor="#2FDB81"
              textColor={Color.black0} 
              height={40}
              width={230}
              left={10}
              top={20}
            />
          </View>
          <Image
            style={styles.stockImageIcon}
            contentFit="cover"
            source={require("../assets/stock-image.png")}
          />
        </View>

        <View style={styles.course}>
          <View style={styles.infoRow}>
            <View style={styles.titleRow}>
              <Text style={styles.titleText}>
                  SAVING
              </Text>
              <Text style={styles.levelText}>LEVEL 0</Text>
            </View>
            <Button 
              title="Coming Soon" 
              onPress={() => navigation.navigate("")} 
              buttonColor="grey"
              textColor={Color.black0} 
              height={40}
              width={230}
              left={10}
              top={20}
              opacity={0.1}
            />
          </View>
          <Image
            style={styles.stockImageIcon}
            contentFit="cover"
            source={require("../assets/pig.png")}
          />
        </View>

        <View style={styles.course}>
          <View style={styles.infoRow}>
            <View style={styles.titleRow}>
              <Text style={styles.titleText}>
                  CREDIT
              </Text>
              <Text style={styles.levelText}>LEVEL 0</Text>
            </View>
            <Button
              title="Coming Soon" 
              onPress={() => navigation.navigate("")} 
              buttonColor="grey"
              textColor={Color.black0} 
              height={40}
              width={230}
              left={10}
              top={20}
            />
          </View>
          <Image
            style={styles.stockImageIcon}
            contentFit="cover"
            source={require("../assets/credit-card-image.png")}
          />
        </View>
      </View>
    </View>
    </ScrollView>
    <Menu/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  homepage: {
    backgroundColor: Color.black0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: "15%",
  },
  topPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
  },
  home: {
    fontSize: FontSize.size_13xl,
  },
  coinCounter: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinCounterIcon: {
    width: 36,
    height: 36,
  },
  smallText: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    alignItems: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  message: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  goldText: {
    color: Color.colorGold,
  },
  coinsRow: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    //justifyContent: 'space-between',
    width: '100%',
    // paddingHorizontal: 30,
    //borderWidth: 1,
  },
  coinIcon: {
    width: 57,
    height: 57,
  },
  greyText: {
    color: Color.colorDarkgray,
  },
  titleText: {
    fontSize: 16,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  levelText: {
    textAlign: "right",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.extraLargeTextRegular,
    fontSize: FontSize.size_xs,
    paddingLeft: 15,
  },
  titleRow: {
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  course: {
    flexDirection: "row",
    top: 20,
    width: 380,
    height: 120,
    borderWidth: 2.5,
    borderColor: '#CBD2DA',
    borderRadius: 10,
  },
  coursesTitle: {
    alignItems: "left",
    paddingTop: 40,
    fontSize: 25,
    textAlign: "left",
    fontFamily: FontFamily.extraLargeTextRegular,
    paddingRight: 260,
  },
  stockImageIcon: {
    left: 30,
    height: 98,
    width: 98,
  },
  courses: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  menuIcon: {
    top: 760,
    width: 393,
    height: 83,
    left: 0,
    position: "absolute",
  },
  menu: {
    top: 760,
    width: 393,
    height: 83,
    left: 0,
    position: "absolute",
  },
});

export default HomePage;