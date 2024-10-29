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
} from "../../../GlobalStyles";
import NavBar1 from "../../../components/NavBar1";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button"; //Importing the button

const M3 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.m3}>
      <NavBar1/>
      <Text style={styles.text}>
        Module 3
      </Text>
      <Button
          title="Next" 
          onPress={() => navigation.navigate("Quiz1")}
          buttonColor={Color.colorSeagreen} 
          textColor={Color.black0} 
          height={65}
          width={350}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  m3: {
    backgroundColor: Color.black0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  text: {
    fontSize: 30,
    color: Color.colorDarkslategray_200,
    fontFamily: 'lexend-regular',
    paddingBottom: 20,
  },
});

export default M3;