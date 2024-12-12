import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useFocusEffect } from "@react-navigation/native";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import Button from "../components/Button";
import Menu from "../components/Menu";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Achievements = () => { 
  const [walletPressed, setWalletPressed] = useState(false);
  const [briefcasePressed, setBriefcasePressed] = useState(false);
  const [internPressed, setInternPressed] = useState(false);
  const [ceoPressed, setCeoPressed] = useState(false);
  const [coins, setCoins] = useState(0);

  // Load user progress (coins) from Firebase
  const loadProgress = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const coinsAmount = userDoc.data().coins || 0;
        setCoins(coinsAmount);
      }
    }
  };

  // // Handle item purchase
  // const handlePurchase = async (requiredCoins, setPressed) => {
  //   if (coins >= requiredCoins) {
  //     const updatedCoins = coins - requiredCoins;
  //     setCoins(updatedCoins); // Update local state immediately
  //     await updateCoins(updatedCoins); // Persist the updated value to Firebase
  //     setPressed(true); // Mark the item as purchased
  //   }
  // };

  // Handle item purchase
  const handlePurchase = async (requiredCoins, setPressed, imageName) => {
    if (coins >= requiredCoins) {
      const updatedCoins = coins - requiredCoins;
      setCoins(updatedCoins); // Update local state immediately
      await updateCoins(updatedCoins); // Persist the updated value to Firebase
      await storePurchasedItem(imageName); // Store the purchased item in Firebase
      setPressed(true); // Mark the item as purchased
    }
  };

  // Update the user's coins in Firebase
  const updateCoins = async (newCoins) => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        await setDoc(
          userDocRef,
          { coins: newCoins },
          { merge: true } // Merge to avoid overwriting other fields
        );
      } catch (error) {
        console.error("Error updating coins:", error);
      }
    }
  };

  // Store purchased item in Firebase
  const storePurchasedItem = async (imageName) => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        await setDoc(
          userDocRef,
          {
            purchasedItems: {
              [imageName]: true, // Mark the item as purchased (or store just the name if needed)
            },
          },
          { merge: true } // Merge to avoid overwriting other fields
        );
      } catch (error) {
        console.error("Error storing purchased item:", error);
      }
    }
  };


  // Load user data on focus
  useFocusEffect(
    useCallback(() => {
      loadProgress();
    }, [])
  );

  // Get button styling and text
  const getButtonColor = (requiredCoins, isPressed) => {
    if (isPressed) {
      return "#2FDB81";
    }
    return coins >= requiredCoins ? "#fcd227" : "grey";
  };

  const getButtonText = (requiredCoins, isPressed) => {
    return isPressed ? "PURCHASED" : `${100 * requiredCoins} coins`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.homepage}>
        <View style={styles.topPart}>
          <Text style={styles.home}>Store</Text>
          <View style={styles.coinCounter}>
            <Image
              style={styles.coinCounterIcon}
              contentFit="cover"
              source={require("../assets/coin-7.png")}
            />
            <Text style={styles.smallText}>{100 * coins}</Text>
          </View>
        </View>

        <View style={styles.courses}>
          <View style={styles.course}>
            <View style={styles.infoRow}>
              <View style={styles.titleRow}>
                <Text style={styles.titleText}>WALLET</Text>
                <Text style={styles.levelText}>Beginner</Text>
              </View>
              <Button
                title={getButtonText(1, walletPressed)}
                onPress={() => handlePurchase(1, setWalletPressed, "wallet.png")}
                buttonColor={getButtonColor(1, walletPressed)}
                textColor={Color.black0}
                height={40}
                width={230}
                left={10}
                top={20}
                disabled={coins < 1}
              />
            </View>
            <Image
              style={styles.stockImageIcon}
              contentFit="cover"
              source={require("../assets/wallet.png")}
            />
          </View>

          <View style={styles.course}>
            <View style={styles.infoRow}>
              <View style={styles.titleRow}>
                <Text style={styles.titleText}>BRIEFCASE</Text>
                <Text style={styles.levelText}>Intermediate</Text>
              </View>
              <Button
                title={getButtonText(5, briefcasePressed)}
                onPress={() => handlePurchase(5, setBriefcasePressed, "briefcase.png")}
                buttonColor={getButtonColor(5, briefcasePressed)}
                textColor={Color.black0}
                height={40}
                width={230}
                left={10}
                top={20}
                disabled={coins < 5}
              />
            </View>
            <Image
              style={styles.stockImageIcon}
              contentFit="cover"
              source={require("../assets/briefcase.png")}
            />
          </View>

          <View style={styles.course}>
            <View style={styles.infoRow}>
              <View style={styles.titleRow}>
                <Text style={styles.titleText}>INTERN</Text>
                <Text style={styles.levelText}>Pro</Text>
              </View>
              <Button
                title={getButtonText(10, internPressed)}
                onPress={() => handlePurchase(10, setInternPressed, "suit.png")}
                buttonColor={getButtonColor(10, internPressed)}
                textColor={Color.black0}
                height={40}
                width={230}
                left={10}
                top={20}
                disabled={coins < 10}
              />
            </View>
            <Image
              style={styles.stockImageIcon}
              contentFit="cover"
              source={require("../assets/suit.png")}
            />
          </View>

          <View style={styles.course}>
            <View style={styles.infoRow}>
              <View style={styles.titleRow}>
                <Text style={styles.titleText}>CEO</Text>
                <Text style={styles.levelText}>Expert</Text>
              </View>
              <Button
                title={getButtonText(50, ceoPressed)}
                onPress={() => handlePurchase(50, setCeoPressed, "suit1.png")}
                buttonColor={getButtonColor(50, ceoPressed)}
                textColor={Color.black0}
                height={40}
                width={230}
                left={10}
                top={20}
                disabled={coins < 50}
              />
            </View>
            <Image
              style={styles.stockImageIcon}
              contentFit="cover"
              source={require("../assets/suit1.png")}
            />
          </View>
        </View>
      </View>
      <Menu />
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

export default Achievements;