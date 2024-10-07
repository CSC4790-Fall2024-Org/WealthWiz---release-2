import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  StatusBar,
  Pressable,
  View,
  ImageBackground,
  Text,
} from "react-native";
import NavBar from "../components/NavBar";
import FormField1 from "../components/DateField";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const ProfilePageEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profilePageEdit}>
      <Image
        style={styles.profilePageEditChild}
        contentFit="cover"
        source={require("../assets/vector-31.png")}
      />
      <StatusBar translucent={true} />
      <NavBar
        navBarPosition="absolute"
        navBarMarginLeft="unset"
        navBarTop={49}
        navBarLeft={33}
        showIcon
      />
      <ImageBackground
        style={[styles.profilePicIcon, styles.savePosition]}
        resizeMode="cover"
        source={require("../assets/profilepic.png")}
      />
      <Pressable style={styles.editPicture}>
        <Image
          style={[styles.editPictureChild, styles.edit1IconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Image
          style={[styles.edit1Icon, styles.edit1IconLayout]}
          contentFit="cover"
          source={require("../assets/edit-1.png")}
        />
      </Pressable>
      <FormField1
        stateDefaultPlaceholderText="#cbd2da"
        stateDefaultPlaceholder="Default Label"
        propTop={672}
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
        propTop={599}
        propFontWeight="500"
        propFontFamily="Lexend"
        propFontSize={16}
        propLeft={34}
        propWidth={323}
        propMarginLeft="unset"
      />
      <FormField1
        stateDefaultPlaceholderText="#cbd2da"
        stateDefaultPlaceholder="Default Label"
        propTop={529}
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
        propTop={459}
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
        propTop={389}
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
        propTop={319}
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
        propTop={249}
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
        propTop={179}
        propFontWeight="500"
        propFontFamily="Lexend"
        propFontSize={16}
        propLeft="50%"
        propWidth={323}
        propMarginLeft={-161.5}
      />
      <Pressable
        style={[styles.save, styles.saveFlexBox]}
        onPress={() => navigation.navigate("ProfilePage")}
      >
        <View style={styles.saveFlexBox}>
          <Text style={styles.saveEdits}>Save Edits</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  savePosition: {
    borderRadius: Border.br_21xl,
    left: "50%",
    position: "absolute",
  },
  edit1IconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  saveFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  profilePageEditChild: {
    top: -371,
    left: -193,
    width: 772,
    height: 806,
    position: "absolute",
  },
  profilePicIcon: {
    marginLeft: -46.5,
    top: 71,
    width: 83,
    height: 83,
  },
  editPictureChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    maxWidth: "100%",
  },
  edit1Icon: {
    height: "50%",
    width: "50%",
    top: "25%",
    right: "25%",
    bottom: "25%",
    left: "25%",
  },
  editPicture: {
    height: "3.33%",
    width: "7.43%",
    top: "14.32%",
    right: "38.12%",
    bottom: "82.35%",
    left: "54.45%",
    position: "absolute",
  },
  saveEdits: {
    fontSize: FontSize.extraLargeTextRegular_size,
    letterSpacing: -1,
    lineHeight: 26,
    fontFamily: FontFamily.extraLargeTextRegular,
    color: Color.black0,
    textAlign: "center",
  },
  save: {
    marginTop: 334,
    marginLeft: -155.5,
    top: "50%",
    backgroundColor: "#0693f1",
    width: 312,
    height: 58,
    justifyContent: "center",
    padding: Padding.p_3xs,
    borderRadius: Border.br_21xl,
    left: "50%",
    position: "absolute",
  },
  profilePageEdit: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfilePageEdit;
