import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import { Color } from "../../../GlobalStyles";
import NavBar1 from "../../../components/NavBar1";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

const M1 = () => {
  const navigation = useNavigation();
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [isCorrect1, setIsCorrect1] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);
  const [isCorrect3, setIsCorrect3] = useState(false);
  const [correct, setCorrect] = useState(0);

  const updateCorrectCount = (isCorrect, setIsCorrect) => {
    if (!isCorrect) {
      setIsCorrect(true);
      setCorrect((prev) => prev + 1);
    }
  };

  const getProgress = () => {
    return correct / 3; // Returns a fraction based on the number of correct answers
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
    if (!isCorrect2) {
      setSelectedOption2(option);
      if (option === "B") {
        updateCorrectCount(isCorrect2, setIsCorrect2);
      }
    }
  };

  const handleOptionPress3 = (option) => {
    if (!isCorrect3) {
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
        <Text style={styles.ModuleText}>Module 1</Text>
        <Text style={styles.InfoText}>
          This is placeholder text serving as a filler for the content yet to be added. Its purpose is to illustrate the layout and visual structure of a document or webpage without the distraction of meaningful content.
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
                    backgroundColor: option.charAt(0) === "B" ? "green" : "red",
                  },
                  isCorrect1 && { opacity: 0.6 },
                ]}
                disabled={isCorrect1}
              >
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            ))}
          </View>
          {selectedOption1 && (
            <Text style={{ ...styles.feedbackText, color: isCorrect1 ? 'green' : 'red' }}>
              {isCorrect1 ? "Correct! Paris is the capital of France." : "Incorrect. Try again!"}
            </Text>
          )}
        </View>

        <Text style={styles.InfoText}>
          This is placeholder text serving as a filler for the content yet to be added. Its purpose is to illustrate the layout and visual structure of a document or webpage without the distraction of meaningful content.
        </Text>

        {/* Question 2 */}
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>What is the capital of France?</Text>
          <View style={styles.optionsContainer}>
            {["A. Berlin", "B. Paris", "C. Madrid", "D. Rome"].map((option, index) => (
              <Pressable
                key={index}
                onPress={() => handleOptionPress2(option.charAt(0))}
                style={[
                  styles.optionButton,
                  selectedOption2 === option.charAt(0) && {
                    backgroundColor: option.charAt(0) === "B" ? "green" : "red",
                  },
                  isCorrect2 && { opacity: 0.6 },
                ]}
                disabled={isCorrect2}
              >
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            ))}
          </View>
          {selectedOption2 && (
            <Text style={{ ...styles.feedbackText, color: isCorrect2 ? 'green' : 'red' }}>
              {isCorrect2 ? "Correct! Paris is the capital of France." : "Incorrect. Try again!"}
            </Text>
          )}
        </View>

        <Text style={styles.InfoText}>
          This is placeholder text serving as a filler for the content yet to be added. Its purpose is to illustrate the layout and visual structure of a document or webpage without the distraction of meaningful content.
        </Text>

        {/* Question 3 */}
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>What is the capital of France?</Text>
          <View style={styles.optionsContainer}>
            {["A. Berlin", "B. Paris", "C. Madrid", "D. Rome"].map((option, index) => (
              <Pressable
                key={index}
                onPress={() => handleOptionPress3(option.charAt(0))}
                style={[
                  styles.optionButton,
                  selectedOption3 === option.charAt(0) && {
                    backgroundColor: option.charAt(0) === "B" ? "green" : "red",
                  },
                  isCorrect3 && { opacity: 0.6 },
                ]}
                disabled={isCorrect3}
              >
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            ))}
          </View>
          {selectedOption3 && (
            <Text style={{ ...styles.feedbackText, color: isCorrect3 ? 'green' : 'red' }}>
              {isCorrect3 ? "Correct! Paris is the capital of France." : "Incorrect. Try again!"}
            </Text>
          )}
        </View>

        {/* Finish Button */}
        <Button
          title="Finish Module"
          onPress={() => navigation.navigate("CourseHome")}
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
    backgroundColor: 'green',
  },
  ModuleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: Color.colorDarkslategray_200,
    fontFamily: 'lexend-regular',
    paddingTop: 5,
    paddingBottom: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  questionBox: {
    borderWidth: 2.5,
    borderColor: Color.colorDarkslategray_200,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '90%',
    backgroundColor: Color.black0,
  },
  questionText: {
    fontSize: 20,
    color: Color.colorDarkslategray_200,
    marginBottom: 10,
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
    fontSize: 15,
    paddingHorizontal: 15,
    paddingBottom: 15,
    fontStyle: 'italic',
    fontFamily: 'lexend-regular',
  },
});

export default M1;
