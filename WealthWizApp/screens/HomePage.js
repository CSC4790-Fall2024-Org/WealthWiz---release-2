import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
  Modal,
  TextInput,
} from "react-native";
import {
  FontSize,
  FontFamily,
  Border,
  Color,
  Padding,
  Gap,
} from "../GlobalStyles";
import NavBar1 from "../components/NavBar1";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.quiz1}>
      <NavBar1/>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Home</Text>
      </View>
      <Button
        title="Start Learning" 
        onPress={() => navigation.navigate("M1")}
        buttonColor={Color.colorSeagreen} 
        textColor={Color.black0} 
        height={65}
        width={350}
      />
    </View>
  )
};

const styles = StyleSheet.create({
    quiz1: {
    backgroundColor: Color.black0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 40, // Adjust the padding if needed
  },
  text: {
    fontSize: 30,
    color: Color.colorDarkslategray_200,
    fontFamily: 'lexend-regular',
    paddingBottom: 20,
    paddingTop: 40,
    textAlign: 'right', // Align text to the right
  },
  text: {
    fontSize: 30,
    color: Color.colorDarkslategray_200,
    fontFamily: 'lexend-regular',
    paddingBottom: 20,
    paddingTop:40,
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'right'
  },
});

export default HomePage;