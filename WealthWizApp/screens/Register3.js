import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, StatusBar, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormField1 from "../components/FormField1";
import NavBar1 from "../components/NavBar1";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Register3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register3}>
      <Image
        style={styles.register3Child}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <StatusBar style={styles.loginPosition} translucent={true} />
      <Image
        style={[styles.bank1Icon, styles.loginPosition]}
        contentFit="cover"
        source={require("../assets/bank1.png")}
      />
      <Pressable
        style={[styles.login, styles.loginFlexBox]}
        onPress={() => navigation.navigate("Register2")}
      >
        <View style={styles.loginFlexBox}>
          <Text style={[styles.next, styles.nextTypo]}>Next</Text>
        </View>
      </Pressable>
      <Text style={[styles.createYourProfile, styles.nextTypo]}>
        Create Your Profile
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
        propLeft={35}
        propWidth={323}
        propMarginLeft="unset"
      />
      <FormField1
        stateDefaultPlaceholderText="#cbd2da"
        stateDefaultPlaceholder="Default Label"
        propTop={326}
        propFontWeight="500"
        propFontFamily="Lexend"
        propFontSize={16}
        propLeft={35}
        propWidth={323}
        propMarginLeft="unset"
      />
      <FormField1
        stateDefaultPlaceholderText="#cbd2da"
        stateDefaultPlaceholder="Default Label"
        propTop={401}
        propFontWeight="500"
        propFontFamily="Lexend"
        propFontSize={16}
        propLeft={35}
        propWidth={323}
        propMarginLeft="unset"
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
  nextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  register3Child: {
    top: -242,
    left: 373,
    width: 268,
    height: 242,
    position: "absolute",
  },
  bank1Icon: {
    marginTop: -377,
    marginLeft: 196.5,
    width: 418,
    height: 400,
    top: "50%",
    left: "50%",
  },
  next: {
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
  createYourProfile: {
    marginLeft: -154.5,
    top: 128,
    fontSize: FontSize.size_13xl,
    letterSpacing: 0,
    lineHeight: 20,
    color: Color.colorDarkslategray_200,
    width: 309,
    height: 25,
    left: "50%",
    position: "absolute",
  },
  register3: {
    backgroundColor: Color.black0,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Register3;
