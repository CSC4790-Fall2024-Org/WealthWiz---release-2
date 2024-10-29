import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProgressBar } from 'react-native-paper';
import Button from "../../../components/Button"; //Importing the button

const M1M = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0.5);

  const handleForward = () => {
    setProgress(progress >= 1 ? 1 : progress + 0.1);
    navigation.navigate("HomePage");
  };

  const handleBack = () => {
    setProgress(progress <= 0 ? 0 : progress - 0.1);
    navigation.navigate("HomePage");
  };

  return (
    <View style={styles.container}>
      {/* Navigation Buttons */}
      <View style={styles.navContainer}>
        <Button
          title="Back"
          onPress={handleBack}
          buttonColor="#FFFFFF"
          textColor="rgba(60, 60, 67, 0.6)"
          borderColor="rgba(113, 113, 113, 0.3)"
          height={50}
          width={120}
        />
        <Button
          title="Forward"
          onPress={handleForward}
          buttonColor="#FFFFFF"
          textColor="#000000"
          borderColor="#000000"
          height={50}
          width={120}
        />
      </View>

      {/* Progress Text and Bar */}
      <Text style={styles.progressText}>Progress</Text>
      <ProgressBar progress={progress} color="#2E8B57" style={styles.progressBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingTop: 60,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
    alignItems: "center",
  },
  progressText: {
    fontSize: 20,
    color: "#333333",
    fontFamily: 'lexend-regular',
    marginBottom: 10,
  },
  progressBar: {
    width: "80%",
    height: 10,
    borderRadius: 5,
  },
});

export default M1;
