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

const Login = () => {
  const navigation = useNavigation();
  const [googleVisible, setGoogleVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const openGoogle = useCallback(() => {
    setGoogleVisible(true);
  }, []);

  const closeGoogle = useCallback(() => {
    setGoogleVisible(false);
  }, []);

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

        <View style={styles.formContainer}>
          <FormField
            placeholder="Email or Username"
            value={email}
            onChangeText={setEmail}
          />
          <FormField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <Button 
            title="Login" 
            onPress={() => navigation.navigate("HomePage")} 
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
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text style={styles.register}>Register</Text>
            </Pressable>
          </View>
        </View>
        <NavBar1 />
      </View>

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

  formContainer: {
    width: '80%',
    alignItems: 'flex-start',
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
});

export default Login;