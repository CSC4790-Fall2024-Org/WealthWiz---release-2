import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
  StatusBar,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FormField1 from "../components/FormField1";
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

const Login = () => {
  const navigation = useNavigation();
  const [googleVisible, setGoogleVisible] = useState(false);

  const openGoogle = useCallback(() => {
    setGoogleVisible(true);
  }, []);

  const closeGoogle = useCallback(() => {
    setGoogleVisible(false);
  }, []);

  return (
    <>
      <View style={styles.login}>
        <View style={[styles.dontHaveAccount, styles.dontPosition]}>
          <Text style={[styles.dontHaveAn, styles.register1Typo]}>
            Don’t have an account?
          </Text>
          <Pressable
            style={[styles.register, styles.dontPosition]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={[styles.register1, styles.register1Typo]}>
              Register
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.login1, styles.login1FlexBox]}
          onPress={() => navigation.navigate("HomePage1")}
        >
          <View style={styles.login1FlexBox}>
            <Text style={[styles.button, styles.buttonTypo]}>Login</Text>
          </View>
        </Pressable>
        <View style={[styles.frameText, styles.frameTextPosition]}>
          <Text style={[styles.wealthwiz, styles.wealthwizLayout]}>
            WealthWiz
          </Text>
        </View>
        <View style={[styles.frameLogo, styles.bank1IconPosition]}>
          <Image
            style={[styles.vectorIcon, styles.bank1IconPosition]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <ImageBackground
            style={[styles.bank1Icon, styles.bank1IconPosition]}
            resizeMode="cover"
            source={require("../assets/bank11.png")}
          />
        </View>
        <Image
          style={[styles.flareIcon, styles.bank1IconPosition]}
          contentFit="cover"
          source={require("../assets/flare.png")}
        />
        <FormField1
          stateDefaultAutoCapitalize="none"
          stateDefaultPlaceholderText="#cbd2da"
          stateDefaultPlaceholder="Password"
          propTop={437}
          propFontWeight="500"
          propFontFamily="Lexend"
          propFontSize={16}
          propLeft={46}
          propWidth={300}
          propMarginLeft="unset"
        />
        <FormField1
          stateDefaultAutoCapitalize="none"
          stateDefaultPlaceholderText="#cbd2da"
          stateDefaultPlaceholder="Email or Username"
          propTop={365}
          propFontWeight="500"
          propFontFamily="Lexend"
          propFontSize={16}
          propLeft="50%"
          propWidth={300}
          propMarginLeft={-150.5}
        />
        <Pressable
          style={[styles.google, styles.login1FlexBox]}
          onPress={openGoogle}
        >
          <Image
            style={styles.googleLogoIcon}
            contentFit="cover"
            source={require("../assets/google-logo.png")}
          />
          <Text style={[styles.signInWith, styles.wealthwizLayout]}>
            Sign in with Google
          </Text>
        </Pressable>
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
  startScreen2NewUser: {
    backgroundColor: Color.colorSeagreen,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center',
  },
  dontPosition: {
    position: "absolute",
    top: "50%",
  },
  register1Typo: {
    textAlign: "left",
    fontSize: FontSize.mediumTextRegular_size,
  },
  backgroundPosition: {
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  bank1IconPosition: {
    left: "50%",
    position: "absolute",
  },
  login1FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttonTypo: {
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  frameTextPosition: {
    height: 45,
    width: 235,
    marginLeft: -117.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  wealthwizLayout: {
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
  },
  dontHaveAn: {
    width: "71.19%",
    color: "rgba(60, 60, 67, 0.6)",
    fontFamily: FontFamily.extraLargeTextRegular,
    lineHeight: 20,
    marginTop: -10,
    textAlign: "left",
    fontSize: FontSize.mediumTextRegular_size,
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  register1: {
    width: "25.55%",
    color: "#3db2ff",
    fontFamily: FontFamily.extraLargeTextRegular,
    lineHeight: 20,
    marginTop: -10,
    textAlign: "left",
    fontSize: FontSize.mediumTextRegular_size,
  },
  register: {
    left: "74.45%",
    top: "50%",
  },
  dontHaveAccount: {
    marginTop: 321,
    width: "57.76%",
    right: "23.66%",
    left: "18.58%",
    height: 20,
    top: "50%",
  },
  background: {
    height: "100%",
    top: "0%",
    right: "0%",
    left: "0%",
  },
  seperator: {
    marginLeft: -66.5,
    bottom: 10,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_600,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    height: "4.25%",
    top: "95.75%",
    right: "0.25%",
    left: "-0.25%",
  },
  button: {
    fontSize: FontSize.extraLargeTextRegular_size,
    letterSpacing: -1,
    lineHeight: 26,
    color: Color.black0,
  },
  login1: {
    marginTop: 86,
    marginLeft: -163.5,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSeagreen,
    width: 327,
    height: 58,
    padding: Padding.p_3xs,
    justifyContent: "center",
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  wealthwiz: {
    marginTop: -22.5,
    fontSize: FontSize.size_21xl,
    letterSpacing: 0,
    color: Color.colorLightgray_100,
    height: 45,
    width: 235,
    marginLeft: -117.5,
    left: "50%",
    top: "50%",
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
    justifyContent: "center",
  },
  frameText: {
    marginTop: -142.8,
    overflow: "hidden",
  },
  vectorIcon: {
    marginLeft: -0.7,
    width: 1,
    height: 0,
    top: "50%",
  },
  bank1Icon: {
    marginTop: -64.8,
    marginLeft: -57.7,
    width: 116,
    height: 111,
    top: "50%",
  },
  frameLogo: {
    marginTop: -324,
    marginLeft: -80.5,
    width: 159,
    height: 164,
    top: "50%",
  },
  flareIcon: {
    marginLeft: -184.5,
    top: 37,
    width: 370,
    height: 267,
    overflow: "hidden",
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
    left: 0,
    top: 0,
  },
  googleLogoIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  signInWith: {
    fontFamily: FontFamily.roboto,
    color: Color.colorDimgray_100,
    width: 120,
    textAlign: "left",
    fontSize: FontSize.mediumTextRegular_size,
    display: "flex",
    lineHeight: 20,
  },
  google: {
    marginLeft: -89.5,
    top: 607,
    height: 18,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    gap: Gap.gap_lg,
    left: "50%",
    position: "absolute",
  },
  bank1Icon1: {
    marginTop: -377,
    marginLeft: 196.5,
    width: 418,
    height: 400,
    top: "50%",
  },
  login: {
    backgroundColor: Color.black0,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },

  /*
  startScreen2NewUser: {
    backgroundColor: Color.colorSeagreen,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 232,
    height: 222,
    marginTop: 250,
    marginBottom: 250,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  login: {
    padding: Padding.p_3xs,
    height: 58,
    width: 131,
    borderRadius: Border.br_21xl,
    marginRight: 30, // Add space to the right of the Login button
    backgroundColor: Color.black0,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  register: {
    borderStyle: "solid",
    borderColor: Color.black0,
    borderWidth: 2,
    padding: Padding.p_3xs,
    height: 58,
    width: 131,
    marginLeft: 30, // Add space to the right of the Login button
    borderRadius: Border.br_21xl,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  buttonTypo: {
    lineHeight: 26,
    letterSpacing: -1,
    fontSize: FontSize.extraLargeTextRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  button: {
    color: Color.colorSeagreen,
    textAlign: "center",
  },
  button1: {
    color: Color.black0,
    textAlign: "center",
  },
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  */
});

export default Login;