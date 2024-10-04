import * as React from "react";
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

export default Register2;
