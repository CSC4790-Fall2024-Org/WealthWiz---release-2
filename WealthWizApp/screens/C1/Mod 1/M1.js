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

const M1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.m1}>
      <NavBar1/>
      <Text style={styles.text}>
        Module 1
      </Text>
      <Button
          title="Next" 
          onPress={() => navigation.navigate("M2")} //populate m2
          buttonColor={Color.colorSeagreen} 
          textColor={Color.black0} 
          height={65}
          width={350}
          position = 'fixed'
      />
    </View>
  )
};

const styles = StyleSheet.create({
  m1: {
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
    paddingTop:40,
    marginLeft: 40,
    marginRight: 40
    
  },
});

export default M1;