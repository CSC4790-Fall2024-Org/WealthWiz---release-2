import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
} from "react-native";
import { Color } from "../../../GlobalStyles";
import NavBar1 from "../../../components/NavBar1";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button"; // Importing the button

const M1 = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [progress, setProgress] = useState(0); // Initial progress value

  const handleOptionPress = (option) => {
    // Only allow pressing if the correct answer hasn't been selected yet
    if (!isCorrect) {
      setSelectedOption(option);
      if (option === "B") {
        setIsCorrect(true); // Mark correct answer
        setProgress(1); // Update progress
      } else {
        setIsCorrect(false); // Mark incorrect answer
      }
    }
  };

  return (
    <View style={styles.m1}>
      <NavBar1 />
      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>
      <Text style={styles.text}>Module 1</Text>
      <Text style={styles.questionText}>What is the capital of France?</Text>
      <View style={styles.optionsContainer}>
        {["A. Berlin", "B. Paris", "C. Madrid", "D. Rome"].map((option, index) => (
          <Pressable
            key={index}
            onPress={() => handleOptionPress(option.charAt(0))}
            style={[
              styles.optionButton,
              selectedOption === option.charAt(0) && {
                backgroundColor: option.charAt(0) === "B" ? "green" : "red",
              },
              isCorrect && { opacity: 0.6 }, // Dim buttons after correct answer
            ]}
            disabled={isCorrect} // Disable all options after correct answer is chosen
          >
            <Text style={styles.optionText}>{option}</Text>
          </Pressable>
        ))}
      </View>
      {selectedOption && (
        <Text style={{ ...styles.feedbackText, color: isCorrect ? 'green' : 'red' }}>
          {isCorrect ? "Correct! Paris is the capital of France." : "Incorrect. Try again!"}
        </Text>
      )}
      <Button
        title="Next"
        onPress={() => navigation.navigate("M2")}
        buttonColor={Color.colorSeagreen}
        textColor={Color.black0}
        height={65}
        width={350}
        disabled={!isCorrect} // Enable only when correct answer is selected
      />
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
  progressBarContainer: {
    width: '90%',
    height: 10,
    backgroundColor: Color.colorLightgray,
    borderRadius: 5,
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green',
    borderRadius: 5,
  },
  text: {
    fontSize: 30,
    color: Color.colorDarkslategray_200,
    fontFamily: 'lexend-regular',
    paddingBottom: 20,
    paddingTop: 40,
    marginLeft: 40,
    marginRight: 40,
  },
  questionText: {
    fontSize: 20,
    color: Color.colorDarkslategray_200,
    marginBottom: 20,
  },
  optionsContainer: {
    width: '90%',
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
  },
});

export default M1;
