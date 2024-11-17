import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Pressable, View, ScrollView } from "react-native";
import { Color } from "../../../GlobalStyles";
import NavBar1 from "../../../components/NavBar1";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";

const M1 = () => {
  const navigation = useNavigation();
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [isCorrect1, setIsCorrect1] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);
  const [isCorrect3, setIsCorrect3] = useState(false);
  const [correct, setCorrect] = useState(0);

  useEffect(() => {
    const loadProgress = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const progress = userDoc.data().progress?.module1 || 0;
          setCorrect(progress);

          if (progress >= 1) {
            setIsCorrect1(true);
            setSelectedOption1("B");
          }
          if (progress >= 2) {
            setIsCorrect2(true);
            setSelectedOption2("C");
          }
          if (progress >= 3) {
            setIsCorrect3(true);
            setSelectedOption3("B");
          }
        }
      }
    };

    loadProgress();
  }, []);

  const updateUserProgress = async (progress) => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);

      try {
        await setDoc(
          userDocRef,
          { progress: { module1: progress } },
          { merge: true }
        );
      } catch (error) {
        console.error("Error updating progress:", error);
      }
    }
  };

  const updateCorrectCount = (isCorrect, setIsCorrect) => {
    if (!isCorrect) {
      setIsCorrect(true);
      const newCorrect = correct + 1;
      setCorrect(newCorrect);
      updateUserProgress(newCorrect);
    }
  };

  const getProgress = () => {
    return correct / 3;
  };

  const handleOptionPress1 = (option) => {
    if (!isCorrect1) {
      setSelectedOption1(option);
      if (option === "B") {
        updateCorrectCount(isCorrect1, setIsCorrect1);
      }
    }
  };

  const handleOptionPress2 = (option) => {
    if (!isCorrect2 && isCorrect1) {
      setSelectedOption2(option);
      if (option === "C") {
        updateCorrectCount(isCorrect2, setIsCorrect2);
      }
    }
  };

  const handleOptionPress3 = (option) => {
    if (!isCorrect3 && isCorrect2) {
      setSelectedOption3(option);
      if (option === "B") {
        updateCorrectCount(isCorrect3, setIsCorrect3);
      }
    }
  };

  return (
    <View style={styles.m1}>
      <NavBar1 />
      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${getProgress() * 100}%` }]} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.ModuleText}>Stock Basics</Text>
        <View style={styles.line}></View>
        <Text style={styles.InfoText}>
          {"\t"}A <Text style={styles.bold}>stock</Text> represents ownership in a company, giving the holder a claim to a portion of the company's assets and earnings. A <Text style={styles.bold}>stock</Text> is a single unit of ownership in that stock—so if you own shares, you own part of the company. Think of a stock as the overall pie, and shares are the individual slices of that pie. 
          {"\n\t"}
          {"\n\t"}Imagine Company X is worth $1,000,000, and it’s divided into 1,000 shares. Each share represents 1/1,000th ownership of the company. If you buy 10 shares of Company X, you now own 1% of the company (10 shares out of 1,000). 
        </Text>

        {/* Question 1 */}
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>What is the difference between a stock and a share?</Text>
          <View style={styles.optionsContainer}>
            {["A. A stock is a single unit of ownership, and a share is ownership in multiple companies.", "B. A stock represents ownership in a company, and a share is a single unit of that ownership.", "C. A stock is the type of soup you make by simmering vegetables, herbs, and bones and a share is the part of the stock you decide to give your friends! ", "D. A stock is a type of loan to a company, while a share is ownership in the company"].map((option, index) => (
              <Pressable
                key={index}
                onPress={() => handleOptionPress1(option.charAt(0))}
                style={[
                  styles.optionButton,
                  selectedOption1 === option.charAt(0) && {
                    backgroundColor: option.charAt(0) === "B" ? Color.colorSeagreen : "red",
                  },
                  isCorrect1 && { opacity: 0.6 },
                ]}
                disabled={isCorrect1}>
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            ))}
          </View>
          {(selectedOption1 === "B" || isCorrect1) && (
            <Text style={{ ...styles.feedbackText, color: Color.colorSeagreen }}>
              Correct! A stock represents ownership in a company, and a share is a single unit of that ownership.
            </Text>
          )}
        </View>


        {/*Text 2*/}
        {isCorrect1 && (
          <Text style={styles.InfoText}>
          {"\t"}The stock market is a network of exchanges where people can buy and sell ownership in publicly traded companies through shares of stock. Companies list their shares on the market to raise money for growth, and investors trade these shares with the goal of making a profit.  
          {"\n\t"}
          {"\n\t"}Prices of stocks change based on supply and demand, news about the company, and overall market trends. Examples of stock markets include the New York Stock Exchange (NYSE) and Nasdaq. 
          </Text>
        )}

        {/* Question 2 */}
        {isCorrect1 && (
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>What is the stock market?</Text>
            <View style={styles.optionsContainer}>
            {["A. A place where companies are created and managed.", "B. A system where only banks can trade money and assets.", "C. A marketplace where investors trade shares of ownership in companies.", "D. A platform where businesses sell products directly to customers."].map((option, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleOptionPress2(option.charAt(0))}
                  style={[
                    styles.optionButton,
                    selectedOption2 === option.charAt(0) && {
                      backgroundColor: option.charAt(0) === "C" ? Color.colorSeagreen : "red",
                    },
                    isCorrect2 && { opacity: 0.6 },
                  ]}
                  disabled={isCorrect2}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </Pressable>
              ))}
            </View>
            {(selectedOption2 === "C" || isCorrect2) && (
              <Text style={{ ...styles.feedbackText, color: Color.colorSeagreen }}>
                Correct! A stock market is a marketplace where investors trade shares of ownership in companies.
              </Text>
            )}
          </View>
        )}

        {/*Text 3*/}
        {isCorrect2 && (
          <Text style={styles.InfoText}>
          {"\t"}When a company like Company X needs more money to grow, it might decide to "go public" by offering its stock to the public through a stock market. This turns Company X into a public company, meaning anyone can buy shares and own a small piece of the business. 
          {"\n\t"}
          {"\n\t"}The stock market also uses indices to track groups of companies and show how the market is performing overall. For example, an index like the S&P 500 tracks the stock prices of 500 large companies, giving investors a way to see if the market is doing well or poorly without looking at individual stocks. So, if the S&P 500 rises, it means many of those 500 companies’ stock prices went up.
          </Text>
        )}

        {/*Question 3*/}
        {isCorrect2 && (
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>What is the difference between a public company and an index?</Text>
            <View style={styles.optionsContainer}>
              {["A. A public company sells products directly to the public, while an index tracks the prices of those products.", "B. A public company offers its stock to the public, while an index tracks the performance of groups of stocks.", "C. A public company is managed by the government, while an index is run by private investors.", "D. A public company sets stock prices, while an index determines which companies can sell shares."].map((option, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleOptionPress3(option.charAt(0))}
                  style={[
                    styles.optionButton,
                    selectedOption3 === option.charAt(0) && {
                      backgroundColor: option.charAt(0) === "B" ? Color.colorSeagreen : "red",
                    },
                    isCorrect3 && { opacity: 0.6 },
                  ]}
                  disabled={isCorrect3}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </Pressable>
              ))}
            </View>
            {(selectedOption3 === "B" || isCorrect3) && (
              <Text style={{ ...styles.feedbackText, color: Color.colorSeagreen }}>
                Correct! A public company offers its stock to the public, while an index tracks the performance of groups of stocks.
              </Text>
            )}
          </View>
        )}

        {/* Finish Button */}
        <Button
          title="Finish Module"
          onPress={() => navigation.navigate("M2")}
          buttonColor={Color.colorSeagreen}
          textColor={Color.black0}
          height={65}
          width={350}
          disabled={correct < 3}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  m1: {
    backgroundColor: Color.black0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  firstText: {
    fontSize: 25,
    lineHeight: 24,
    paddingBottom: 15,
    paddingHorizontal: 20,
    marginTop: 15, 
    color: Color.colorDarkslategray_200, 
    fontFamily: 'lexend-regular', 
    textAlign: 'center',
    flexWrap: 'wrap', 
},
  progressBarContainer: {
    width: '70%',
    height: 15,
    borderRadius: 5,
    marginBottom: 20,
    marginLeft: 70,
    borderWidth: 2,
    borderColor: Color.colorDarkslategray_200,
  },
  progressBar: {
    height: '100%',
    backgroundColor: Color.colorSeagreen,
  },
  ModuleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: Color.colorSeagreen,
    fontFamily: 'lexend-regular',
    paddingTop: 5,
    paddingBottom:10,
    marginLeft: 40,
    marginRight: 40,
  },
  line:{
      width: '90%',
      height: 10,
      backgroundColor: Color.colorSeagreen,
      marginBottom:15,
      borderRadius:4,
  },
  questionBox: {
    borderWidth: 2.5,
    borderColor: Color.colorSeagreen,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '90%',
    backgroundColor: Color.black0,
  },
  questionText: {
    fontSize: 20,
    color: Color.colorSeagreen,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  optionsContainer: {
    width: '100%',
  },
  optionButton: {
    backgroundColor: Color.colorDarkslategray_200,
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: Color.black0,
  },
  feedbackText: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: 'bold',
    fontFamily: 'lexend-regular',
  },
  InfoText: {
    fontSize: 18,
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderLeft: 20,
    borderRight: 20,
    fontFamily: 'lexend-regular',
    flexWrap: 'wrap',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default M1;
