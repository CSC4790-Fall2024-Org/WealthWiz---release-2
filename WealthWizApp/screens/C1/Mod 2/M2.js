import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Pressable, View, ScrollView } from "react-native";
import { Color } from "../../../GlobalStyles";
import NavBar1 from "../../../components/NavBar1";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";

const M2 = () => {
  const navigation = useNavigation();
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [isCorrect1, setIsCorrect1] = useState(null);
  const [isCorrect2, setIsCorrect2] = useState(null);
  const [isCorrect3, setIsCorrect3] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const loadProgress = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const progress = userDoc.data().progress?.module2 || 0;
          const userCoins = userDoc.data().coins || 0;
          setCorrect(progress);
          setCoins(userCoins);

          if (progress >= 1) {
            setIsCorrect1(true);
            setSelectedOption1("B");
          }
          if (progress >= 2) {
            setIsCorrect2(true);
            setSelectedOption2("D");
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

  const updateUserProgress = async (progress, coinsEarned = 0) => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);

      try {
        const newCoins = coins + coinsEarned;
        setCoins(newCoins);

        await setDoc(
          userDocRef,
          { progress: { module2: progress }, coins: newCoins },
          { merge: true }
        );
      } catch (error) {
        console.error("Error updating progress:", error);
      }
    }
  };

  const updateCorrectCount = (isCorrect, setIsCorrect) => {
    if (!isCorrect || isCorrect === null) {
      setIsCorrect(true);
      const newCorrect = correct + 1;
      setCorrect(newCorrect);
      const coinsEarned = 1
      updateUserProgress(newCorrect, coinsEarned);
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
      else {
        setIsCorrect1(false)
      }
    }
  };

  const handleOptionPress2 = (option) => {
    if (!isCorrect2 && isCorrect1) {
      setSelectedOption2(option);
      if (option === "D") {
        updateCorrectCount(isCorrect2, setIsCorrect2);
      }
      else {
        setIsCorrect2(false)
      }
    }
  };

  const handleOptionPress3 = (option) => {
    if (!isCorrect3 && isCorrect2) {
      setSelectedOption3(option);
      if (option === "B") {
        updateCorrectCount(isCorrect3, setIsCorrect3);
      }
      else {
        setIsCorrect3(false)
      }
    }
  };

  return (
    <View style={styles.m2}>
      <NavBar1 />
      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${getProgress() * 100}%` }]} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.ModuleText}>Module 2 Course</Text>
        <View style={styles.line}></View>
        <Text style={styles.InfoText}>
          {"\t"}Market capitalization, or market cap, is the total value of a company’s shares of stock. It’s calculated by multiplying the company’s share price by the total number of its shares. 
          {"\n\t"}
          {"\n\t"}For example, if a company has 1 million shares, and each share costs $50, the company’s market cap is $50 million. It’s a way to measure how big or valuable a company is in the stock market.
        </Text>

        {/* Question 1 */}
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>A company has 2 million shares, and each share is priced at $25. What is the company’s market capitalization?</Text>
          <View style={styles.optionsContainer}>
            {["A. $25 million ", "B. $50 million ", "C. $2 million ", "D. $75 million"].map((option, index) => (
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
              Correct! The answer is $50 million.
            </Text>
          )}

          {(isCorrect1 === false) && (
            <Text style={{ ...styles.feedbackText, color: "red" }}>
              {"\t"}Incorrect!
              {"\n\t"}Try again!
            </Text>
          )}
        </View>


        {/*Text 2*/}
        {isCorrect1 && (
          <Text style={styles.InfoText}>
          {"\t"}The price of a stock changes because of supply and demand—how many people want to buy or sell it. If more people want to buy the stock, the price goes up. If more people want to sell it, the price goes down. It’s like any marketplace: prices rise when something is popular and fall when it’s not. 
          {"\n\t"}
          {"\n\t"}Several things can affect demand for a stock, like how well the company is doing, news about the company or economy, and even big events around the world. For example, if a company announces record profits, more people might want to buy its stock, making the price go up. On the other hand, bad news or uncertainty can make prices drop.
          </Text>
        )}

        {/* Question 2 */}
        {isCorrect1 && (
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>Why do stock prices go up and down?</Text>
            <View style={styles.optionsContainer}>
              {["A. Because companies change the price of their shares every day.", "B. The government sets the prices based on the economy.", "C. Stock prices always go up when a company makes a profit.", "D. Based on supply and demand—how many people want to buy or sell the stock."].map((option, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleOptionPress2(option.charAt(0))}
                  style={[
                    styles.optionButton,
                    selectedOption2 === option.charAt(0) && {
                      backgroundColor: option.charAt(0) === "D" ? Color.colorSeagreen : "red",
                    },
                    isCorrect2 && { opacity: 0.6 },
                  ]}
                  disabled={isCorrect2}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </Pressable>
              ))}
            </View>
            {(selectedOption2 === "D" || isCorrect2) && (
              <Text style={{ ...styles.feedbackText, color: Color.colorSeagreen }}>
                Correct! It is based on supply and demand—how many people want to buy or sell the stock.
              </Text>
            )}

            {(isCorrect2 === false) && (
            <Text style={{ ...styles.feedbackText, color: "red" }}>
              {"\t"}Incorrect!
              {"\n\t"}Try again!
            </Text>
          )}
          </View>
        )}

        {/*Text 3*/}
        {isCorrect2 && (
          <Text style={styles.InfoText}>
          {"\t"}Market capitalization changes as the share price changes because it’s calculated by multiplying the share price by the number of shares. 
          {"\n\t"}
          {"\n\t"}For example, if a company has 1 million shares and the share price is $20, the market cap is $20 million. If the share price rises to $25, the market cap increases to $25 million, and if the share price falls to $15, the market cap drops to $15 million. This shows how a company’s market value moves with its stock price.
          </Text>
        )}

        {/*Question 3*/}
        {isCorrect2 && (
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>A company has 1 million shares, and its share price increases from $30 to $35. What happens to the company’s market capitalization?</Text>
            <View style={styles.optionsContainer}>
              {["A. It decreases from $35 million to $30 million", "B. It increases from $30 million to $35 million", "C. It stays the same", "D. It decreases to $25 million"].map((option, index) => (
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
                Correct! It increases from $30 million to $35 million.
              </Text>
            )}

            {(isCorrect2 === false) && (
              <Text style={{ ...styles.feedbackText, color: "red" }}>
                {"\t"}Incorrect!
                {"\n\t"}Try again!
              </Text>
          )}
          </View>
        )}

        {/* Finish Button */}
        <Button
          title="Finish Module"
          onPress={() => navigation.navigate("StockMarketHome")}
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
  m2: {
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
});

export default M2;
