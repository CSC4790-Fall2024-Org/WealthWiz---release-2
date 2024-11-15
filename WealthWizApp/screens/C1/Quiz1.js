import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Pressable, View, ScrollView } from "react-native";
import { Color } from "../../GlobalStyles";
import NavBar1 from "../../components/NavBar1";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

const SMQuiz = () => {
  const navigation = useNavigation();
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [selectedOption5, setSelectedOption5] = useState(null);
  const [isCorrect1, setIsCorrect1] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);
  const [isCorrect3, setIsCorrect3] = useState(false);
  const [isCorrect4, setIsCorrect4] = useState(false);
  const [isCorrect5, setIsCorrect5] = useState(false);
  const [correct, setCorrect] = useState(0);

  useEffect(() => {
    const loadProgress = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const progress = userDoc.data().progress?.smquiz || 0;
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
          if (progress >= 4) {
            setIsCorrect4(true);
            setSelectedOption4("B");
          }
          if (progress >= 5) {
            setIsCorrect4(true);
            setSelectedOption5("B");
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
          { progress: { smquiz: progress } },
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
    return correct / 5;
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
      if (option === "D") {
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

  const handleOptionPress4 = (option) => {
    if (!isCorrect4 && isCorrect3) {
      setSelectedOption4(option);
      if (option === "C") {
        updateCorrectCount(isCorrect4, setIsCorrect4);
      }
    }
  };

  const handleOptionPress5 = (option) => {
    if (!isCorrect5 && isCorrect4) {
      setSelectedOption5(option);
      if (option === "A") {
        updateCorrectCount(isCorrect5, setIsCorrect5);
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
        <Text style={styles.ModuleText}>Stock Market Quiz</Text>
        <View style={styles.line}></View>
        <Text style={styles.InfoText}>
          {"\t"}This is placeholder text serving as a filler for the content yet to be added. 
          {"\n\t"}
          {"\n\t"}Its purpose is to illustrate the layout and visual structure of a document or webpage without the distraction of meaningful content.
        </Text>

        {/* Question 1 */}
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>What is the capital of France?</Text>
          <View style={styles.optionsContainer}>
            {["A. Berlin", "B. Paris", "C. Madrid", "D. Rome"].map((option, index) => (
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
              Correct! Paris is the capital of France.
            </Text>
          )}
        </View>


        {/*Text 2*/}
        {isCorrect1 && (
          <Text style={styles.InfoText}>
          {"\t"}This is placeholder text serving as a filler for the content yet to be added. 
          {"\n\t"}
          {"\n\t"}Its purpose is to illustrate the layout and visual structure of a document or webpage without the distraction of meaningful content.
          </Text>
        )}

        {/* Question 2 */}
        {isCorrect1 && (
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>What is the largest ocean on Earth?</Text>
            <View style={styles.optionsContainer}>
              {["A. Atlantic Ocean", "B. Indian Ocean", "C. Arctic Ocean", "D. Pacific Ocean"].map((option, index) => (
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
                Correct! The Pacific Ocean is the largest ocean on Earth.
              </Text>
            )}
          </View>
        )}

        {/*Text 3*/}
        {isCorrect2 && (
          <Text style={styles.InfoText}>
          {"\t"}This is placeholder text serving as a filler for the content yet to be added. 
          {"\n\t"}
          {"\n\t"}Its purpose is to illustrate the layout and visual structure of a document or webpage without the distraction of meaningful content.
          </Text>
        )}

        {/*Question 3*/}
        {isCorrect2 && (
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>What is the longest river in the world?</Text>
            <View style={styles.optionsContainer}>
              {["A. Amazon River", "B. Nile River", "C. Yangtze River", "D. Mississippi River"].map((option, index) => (
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
                Correct! The Nile River is the longest river in the world.
              </Text>
            )}
          </View>
        )}

        {/*Text 4*/}
        {isCorrect3 && (
          <Text style={styles.InfoText}>
          {"\t"}This is placeholder text serving as a filler for the content yet to be added. 
          {"\n\t"}
          {"\n\t"}Its purpose is to illustrate the layout and visual structure of a document or webpage without the distraction of meaningful content.
          </Text>
        )}

        {/*Question 4*/}
        {isCorrect3 && (
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>What is the smallest planet in the Solar System?</Text>
            <View style={styles.optionsContainer}>
              {["A. Venus", "B. Mars", "C. Mercury", "D. Earth"].map((option, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleOptionPress4(option.charAt(0))}
                  style={[
                    styles.optionButton,
                    selectedOption4 === option.charAt(0) && {
                      backgroundColor: option.charAt(0) === "C" ? Color.colorSeagreen : "red",
                    },
                    isCorrect4 && { opacity: 0.6 },
                  ]}
                  disabled={isCorrect4}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </Pressable>
              ))}
            </View>
            {(selectedOption4 === "C" || isCorrect4) && (
              <Text style={{ ...styles.feedbackText, color: Color.colorSeagreen }}>
                Correct! Mercury is the smallest planet in the Solar System.
              </Text>
            )}
          </View>
        )}


        {/*Text 5*/}
        {isCorrect4 && (
          <Text style={styles.InfoText}>
          {"\t"}This is placeholder text serving as a filler for the content yet to be added. 
          {"\n\t"}
          {"\n\t"}Its purpose is to illustrate the layout and visual structure of a document or webpage without the distraction of meaningful content.
          </Text>
        )}

        {/*Question 5*/}
        {isCorrect4 && (
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>Which element has the chemical symbol O?</Text>
            <View style={styles.optionsContainer}>
              {["A. Oxygen", "B. Gold", "C. Osmium", "D. Hydrogen"].map((option, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleOptionPress5(option.charAt(0))}
                  style={[
                    styles.optionButton,
                    selectedOption5 === option.charAt(0) && {
                      backgroundColor: option.charAt(0) === "A" ? Color.colorSeagreen : "red",
                    },
                    isCorrect5 && { opacity: 0.6 },
                  ]}
                  disabled={isCorrect5}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </Pressable>
              ))}
            </View>
            {(selectedOption5 === "A" || isCorrect5) && (
              <Text style={{ ...styles.feedbackText, color: Color.colorSeagreen }}>
                Correct! Oxygen has the chemical symbol O.
              </Text>
            )}
          </View>
        )}

        {/* Finish Button */}
        <Button
          title="Finish Module"
          onPress={() => navigation.navigate("Quiz1")}
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

export default SMQuiz;
