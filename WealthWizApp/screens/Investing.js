/*NOTE THIS IS THE SAME CODE AS LOG IN SCREEN NOW JUST SO IT WILL RUN */

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
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import SignInWithGoogle from "../components/SignInWithGoogle";
import NavBar1 from "../components/NavBar1";
import {
  FontSize,
  FontFamily,
  Border,
  Color,
  Padding,
  Gap,
} from "../GlobalStyles";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigation = useNavigation();
  const [googleVisible, setGoogleVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  
  const openGoogle = useCallback(() => {
    setGoogleVisible(true);
  }, []);

  const closeGoogle = useCallback(() => {
    setGoogleVisible(false);
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setModalMessage('Login successful!');
      setModalVisible(true);
      navigation.navigate("HomePage");
    } catch (error) {
      setModalMessage(`Invalid Username/Password. Please Try Again!`);
      setModalVisible(true);
    }
  };

  return (
    <>
      <View style={styles.login}>
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

        <FormField
          placeholder="Email or Username"
          value={email}
          onChangeText={setEmail}
          width="80%"
        />
        <FormField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          width="80%"
        />

        <View style={styles.buttonsContainer}>
          <Button 
            title="Login" 
            onPress={handleLogin}
            buttonColor={Color.colorSeagreen} 
            textColor={Color.black0} 
            height={65}
            width={350}
          />
          <Pressable style={styles.google} onPress={openGoogle}>
            <Image
              style={styles.googleLogoIcon}
              contentFit="cover"
              source={require("../assets/google-logo.png")}
            />
            <Text style={styles.signInWith}>Sign in with Google</Text>
          </Pressable>
          <View style={styles.dontHaveAccount}>
            <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
            <Pressable onPress={() => navigation.navigate("Register1")}>
              <Text style={styles.register}>Register</Text>
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

      <Modal animationType="fade" transparent visible={googleVisible}>
        <View style={styles.googleOverlay}>
          <Pressable style={styles.googleBg} onPress={closeGoogle} />
          <SignInWithGoogle onClose={closeGoogle} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  login: {
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

  buttonsContainer: {
    alignItems: 'center',
  },

  google: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  googleLogoIcon: {
    width: 14,
    height: 14,
    marginRight: 10,
  },
  signInWith: {
    fontFamily: FontFamily.roboto,
    color: Color.colorDimgray_100,
    fontSize: FontSize.mediumTextRegular_size,
  },

  dontHaveAccount: {
    flexDirection: "row",
    marginTop: 150,
    alignItems: "center",
  },
  dontHaveAn: {
    color: "rgba(60, 60, 67, 0.6)",
    fontFamily: FontFamily.extraLargeTextRegular,
    fontSize: FontSize.mediumTextRegular_size,
  },
  register: {
    color: Color.colorBlue,
    fontFamily: FontFamily.extraLargeTextRegular,
    fontSize: FontSize.mediumTextRegular_size,
    marginLeft: 10,
  },
  googleOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  googleBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
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

export default Login;