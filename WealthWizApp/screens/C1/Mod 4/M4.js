import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Pressable, View, ScrollView } from "react-native";
import { Color } from "../../../GlobalStyles";
import NavBar1 from "../../../components/NavBar1";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";

const M4 = () => {
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
          const progress = userDoc.data().progress?.module4 || 0;
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
          { progress: { module4: progress } },
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
        <Text style={styles.ModuleText}>Investing Best Practices</Text>
        <View style={styles.line}></View>
        <Text style={styles.InfoText}>
          {"\t"}Diversification is important in investing because it helps reduce risk. It means spreading your investments across different types of assets, industries, or companies so that your portfolio isn’t too dependent on the success or failure of any single investment.  
          {"\n\t"}
          {"\n\t"}For example, instead of putting all your money into one company’s stock, you could invest in stocks from different industries (like technology, healthcare, and retail) or add bonds and mutual funds. This way, if one investment performs poorly, others may do well, helping to balance out your overall returns and protect your money. It’s like not putting all your eggs in one basket.
        </Text>

        {/* Question 1 */}
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>Why is diversification important in investing?</Text>
          <View style={styles.optionsContainer}>
            {["A. It guarantees higher returns on all investments.", "B. It reduces risk by spreading investments across different assets or industries.", "C. It eliminates all risk in the stock market.", "D. It ensures that all investments grow at the same rate."].map((option, index) => (
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
              Correct!
            </Text>
          )}
          {(isCorrect1 === false) && (
            <Text style={{ ...styles.feedbackText, color: "red" }}>
              {"\t"}Incorrect!
              {"\n\t"}
            </Text>
          )}
        </View>


        {/*Text 2*/}
        {isCorrect1 && (
          <Text style={styles.InfoText}>
          {"\t"}To evaluate risk when buying a stock, start by looking at the company itself. Is it performing well, making profits, and growing steadily? A strong, stable company is less risky than one with financial struggles. Also, check how much the stock price moves up and down (this is called volatility). Stocks with big price swings can bring high rewards but are riskier.
          {"\n\t"}
          {"\n\t"}Next, think about the bigger picture. Is the industry the company belongs to growing or shrinking? For example, technology can be exciting but more unpredictable, while industries like utilities tend to be safer. Finally, consider your own comfort with risk. If you’re not okay with losing money in the short term, focus on stable stocks. By understanding these factors, you can make smarter investment choices.
          </Text>
        )}

        {/* Question 2 */}
        {isCorrect1 && (
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>Which of the following helps you evaluate the risk of buying a stock?</Text>
            <View style={styles.optionsContainer}>
              {["A. Watching how quickly the stock market closes each day.", "B. Focusing only on stocks with the highest prices.", "C. Ignoring industry trends and only looking at the stock price.", "D. Checking the company’s earnings and stability."].map((option, index) => (
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
                Correct!
              </Text>
            )}
            {(isCorrect2 === false) && (
            <Text style={{ ...styles.feedbackText, color: "red" }}>
              {"\t"}Incorrect!
              {"\n\t"}
            </Text>
          )}
          </View>
        )}

        {/*Text 3*/}
        {isCorrect2 && (
          <Text style={styles.InfoText}>
          {"\t"}A smart way to invest is to do it regularly, like putting a set amount of money into the market every month. This strategy, called dollar-cost averaging, helps balance out the ups and downs of stock prices. A good starting point is investing in index funds, which are simple, low-cost investments that track the performance of the whole market, like the S&P 500. They let you own a small piece of many companies, making your investment less risky. 
          {"\n\t"}
          {"\n\t"}It’s also important to think long-term and not panic when the market goes down. The stock market has ups and downs, but over time, it generally grows. Diversifying your investments—spreading your money across different companies and industries—can further reduce risk. Finally, avoid making emotional decisions, like selling out of fear or chasing quick profits, and stick to your plan for steady, long-term growth.
          </Text>
        )}

        {/*Question 3*/}
        {isCorrect2 && (
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>Which of the following is a best practice for investing?</Text>
            <View style={styles.optionsContainer}>
              {["A. Putting all your money into one stock to maximize returns. ", "B. Investing regularly, even when the market goes up and down.", "C. Selling your investments every time the market dips.", "D. Only investing in companies with the highest stock prices."].map((option, index) => (
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
                Correct!
              </Text>
            )}
            {(isCorrect3 === false) && (
            <Text style={{ ...styles.feedbackText, color: "red" }}>
              {"\t"}Incorrect!
              {"\n\t"}
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
    alignItems: 'left',
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

export default M4;
