import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Pressable, View, ScrollView } from "react-native";
import { Color } from "../../../GlobalStyles";
import NavBar1 from "../../../components/NavBar1";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";

const M3 = () => {
  const navigation = useNavigation();
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [isCorrect1, setIsCorrect1] = useState(null);
  const [isCorrect2, setIsCorrect2] = useState(null);
  const [isCorrect3, setIsCorrect3] = useState(null);
  const [correct, setCorrect] = useState(0);

  useEffect(() => {
    const loadProgress = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const progress = userDoc.data().progress?.module3 || 0;
          setCorrect(progress);

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

  const updateUserProgress = async (progress) => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);

      try {
        await setDoc(
          userDocRef,
          { progress: { module3: progress } },
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
    <View style={styles.m3}>
      <NavBar1 />
      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${getProgress() * 100}%` }]} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.ModuleText}>Module 3 Course</Text>
        <View style={styles.line}></View>
        <Text style={styles.InfoText}>
          {"\t"}The concept of buying low and selling high is a basic strategy in the stock market to make a profit. It means purchasing a stock when its price is low (less expensive) and then selling it later when the price is higher (more valuable). 
          {"\n\t"}
          {"\n\t"}For example, if you buy a stock at $10 per share and later sell it for $15 per share, you earn a profit of $5 per share. The difference between the lower buying price and the higher selling price is your profit. This strategy works best if you carefully research which stocks might increase in value over time 
        </Text>

        {/* Question 1 */}
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>If you buy a stock for $20 per share and later sell it for $35 per share, what is your profit per share?</Text>
          <View style={styles.optionsContainer}>
            {["A. $20", "B. $15", "C. $35", "D. $5"].map((option, index) => (
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
              Correct! The answer is $20.
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
          {"\t"}Market volatility refers to how much and how quickly stock prices change over a short period. High volatility means stock prices are moving up and down a lot, while low volatility means prices are more stable. 
          {"\n\t"}
          {"\n\t"}For example, during an economic crisis or major news event, the stock market might experience high volatility, with prices rising or falling dramatically in a single day. On the other hand, in a calm market with steady growth, volatility is low, and prices change gradually. Volatility can be risky for investors, but it also creates opportunities to buy stocks at lower prices or sell them for a profit.
          </Text>
        )}

        {/* Question 2 */}
        {isCorrect1 && (
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>What does market volatility indicate?</Text>
            <View style={styles.optionsContainer}>
              {["A. That stock prices are changing slowly and predictably.", "B. That the market is completely risk-free.", "C. That all stocks in the market are losing value.", "D. That stock prices are moving quickly and unpredictably."].map((option, index) => (
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
                Correct! It is when stock prices are moving quickly and unpredictably.
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
          {"\t"}Dividends are payments a company makes to its shareholders as a reward for investing. If you own shares in a company that pays dividends, you get a small amount of money for each share you own. 
          {"\n\t"}
          {"\n\t"}For example, if a company pays a dividend of $2 per share and you own 10 shares, you would receive $20 in dividends. Companies decide how often to pay dividends, such as quarterly or yearly, and not all companies pay them.
          </Text>
        )}
        

        {/*Question 3*/}
        {isCorrect2 && (
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>What is a dividend?</Text>
            <View style={styles.optionsContainer}>
              {["A. The increase in a stock's price over time.", "B. A payment a company makes to its shareholders, usually from its profits.", "C. The fee paid to buy or sell shares in the stock market.", "D. The amount of taxes paid on stock market earnings."].map((option, index) => (
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
                Correct! A dividend is a payment a company makes to its shareholders, usually from its profits.
              </Text>
            )}
            {(isCorrect3 === false) && (
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
  m3: {
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

export default M3;
