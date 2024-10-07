import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import NavBar1 from "../components/NavBar1";
import {
  FontSize,
  FontFamily,
  Color,
} from "../GlobalStyles";

const Registration = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleRegistration = async () => {
    if (password !== confirmPassword) {
      setModalMessage("Passwords do not match!");
      setModalVisible(true);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setModalMessage('Registration successful!');
      setModalVisible(true);
      navigation.navigate("HomePage");
    } catch (error) {
      setModalMessage(`Error: ${error.message}`);
      setModalVisible(true);
    }
  };

  return (
    <>
      <View style={styles.registration}>
        <View style={styles.logoContainer}>
          <ImageBackground
            style={styles.bankIcon}
            resizeMode="cover"
            source={require("../assets/bank-logo.png")}
          />
          <Image
            style={styles.flareIcon}
            contentFit="cover"
            source={require("../assets/flare.png")}
          />
          <Text style={styles.wealthwiz}>WealthWiz</Text>
        </View>

        <View style={styles.formContainer}>
          {}
          <FormField
            placeholder="Name"
            value={name}
            onChangeText={setName} 
          />
          <FormField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <FormField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <FormField
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <Button 
            title="Register" 
            onPress={handleRegistration}
            buttonColor={Color.colorSeagreen} 
            textColor={Color.black0} 
            height={65}
            width={350}
          />
          <View style={styles.alreadyHaveAccount}>
            <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={styles.login}>Login</Text>
            </Pressable>
          </View>
        </View>
        <NavBar1 />
      </View>

      <Modal animationType="fade" transparent visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalMessage}>{modalMessage}</Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButton}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  registration: {
    backgroundColor: Color.black0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  bankIcon: {
    width: 116,
    height: 111,
    marginTop: 80,
  },
  flareIcon: {
    position: "absolute",
    width: 370,
    height: 267,
  },
  wealthwiz: {
    fontSize: 40,
    color: Color.colorLightgray_100,
    textAlign: "center",
    fontFamily: 'lexend-regular',
    marginTop: 55,
  },
  formContainer: {
    width: '80%',
    alignItems: 'flex-start',
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  alreadyHaveAccount: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
  },
  alreadyHaveAn: {
    color: "rgba(60, 60, 67, 0.6)",
    fontFamily: FontFamily.extraLargeTextRegular,
    fontSize: FontSize.mediumTextRegular_size,
  },
  login: {
    color: Color.colorBlue,
    fontFamily: FontFamily.extraLargeTextRegular,
    fontSize: FontSize.mediumTextRegular_size,
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: Color.white,
    borderRadius: 10,
    alignItems: "center",
  },
  modalMessage: {
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    color: Color.colorBlue,
    fontWeight: "bold",
  },
});

export default Registration;




/*import * as React from "react";
import { StatusBar, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormField1 from "../components/FormField1";
import NavBar1 from "../components/NavBar1";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Register2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register4}>
      <StatusBar style={styles.loginPosition} translucent={true} />
      <Pressable
        style={[styles.login, styles.loginFlexBox]}
        onPress={() => navigation.navigate("HomePage1")}
      >
        <View style={styles.loginFlexBox}>
          <Text style={[styles.finish, styles.finishTypo]}>Finish</Text>
        </View>
      </Pressable>
      <Text style={[styles.personalInformation, styles.finishTypo]}>
        Personal Information
      </Text>
      <FormField1
        stateDefaultPlaceholderText="#cbd2da"
        stateDefaultPlaceholder="Default Label"
        propTop={176}
        propFontWeight="500"
        propFontFamily="Lexend"
        propFontSize={16}
        propLeft="50%"
        propWidth={323}
        propMarginLeft={-161.5}
      />
      <FormField1
        stateDefaultPlaceholderText="#cbd2da"
        stateDefaultPlaceholder="Default Label"
        propTop={251}
        propFontWeight="500"
        propFontFamily="Lexend"
        propFontSize={16}
        propLeft="50%"
        propWidth={323}
        propMarginLeft={-161.5}
      />
      <FormField1
        stateDefaultPlaceholderText="#cbd2da"
        stateDefaultPlaceholder="Default Label"
        propTop={326}
        propFontWeight="500"
        propFontFamily="Lexend"
        propFontSize={16}
        propLeft="50%"
        propWidth={323}
        propMarginLeft={-161.5}
      />
      <FormField1
        stateDefaultPlaceholderText="#cbd2da"
        stateDefaultPlaceholder="Default Label"
        propTop={401}
        propFontWeight="500"
        propFontFamily="Lexend"
        propFontSize={16}
        propLeft="50%"
        propWidth={323}
        propMarginLeft={-161.5}
      />
      <NavBar1 />
    </View>
  );
};

const styles = StyleSheet.create({
  loginPosition: {
    left: "50%",
    position: "absolute",
  },
  loginFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  finishTypo: {
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  finish: {
    fontSize: FontSize.extraLargeTextRegular_size,
    letterSpacing: -1,
    lineHeight: 26,
    color: Color.black0,
  },
  login: {
    marginTop: 278,
    marginLeft: -156.5,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSeagreen,
    width: 312,
    height: 58,
    justifyContent: "center",
    padding: Padding.p_3xs,
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  personalInformation: {
    marginLeft: -166.5,
    top: 128,
    fontSize: FontSize.size_13xl,
    letterSpacing: 0,
    lineHeight: 20,
    color: Color.colorDarkslategray_200,
    width: 333,
    height: 27,
    left: "50%",
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  register4: {
    backgroundColor: Color.black0,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Register2;*/

