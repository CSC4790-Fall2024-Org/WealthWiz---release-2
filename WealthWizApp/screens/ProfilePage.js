import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/NavBar";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";
import Menu from "../components/Menu";

const ProfilePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <View style={styles.profilePage}>
      <Image
        style={styles.backgroundImage}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <StatusBar style={styles.statusBar} translucent={true} />
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>2+ hours</Text>
          <Text style={styles.statLabel}>Total Learn</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>20</Text>
          <Text style={styles.statLabel}>Achievements</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>2</Text>
          <Text style={styles.statLabel}>Completed Courses</Text>
        </View>
      </View>
      <Pressable
        style={styles.editButton}
        onPress={() => navigation.navigate("ProfilePageEdit")}
      >
        <Image
          style={styles.editIcon}
          contentFit="cover"
          source={require("../assets/note-pencil.png")}
        />
      </Pressable>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userHandle}>@username</Text>
      </View>
      <ImageBackground
        style={styles.profileImage}
        resizeMode="cover"
        source={require("../assets/profilepic.png")}
      />
      <Pressable
        style={styles.logoutButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.logoutText}>Logout Account</Text>
      </Pressable>
      <NavBar
        navBarPosition="absolute"
        navBarTop={49}
        navBarLeft={33}
        showIcon={false}
      />
      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputText}>example@email.com</Text>
          </View>
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Age</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputText}>21</Text>
          </View>
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputText}>(xxx)-xxx-xxxx</Text>
          </View>
        </View>
      </View>
    </View>
    <Menu/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  statusBar: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  profilePage: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  backgroundImage: {
    position: "absolute",
    top: -250,
    left: -280,
    width: 760,
    height: 700,
  },
  statsContainer: {
    position: "absolute",
    top: 240,
    left: "50%",
    marginLeft: -160,
    width: 320,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: FontSize.extraLargeTextRegular_size,
    fontFamily: FontFamily.extraLargeTextRegular,
    color: Color.colorDarkslategray_300,
  },
  statLabel: {
    fontSize: FontSize.extraSmallTextRegular_size,
    color: Color.colorGray_200,
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  divider: {
    width: 1,
    height: 25,
    backgroundColor: Color.colorGainsboro_200,
  },
  editButton: {
    position: "absolute",
    top: "15%",
    right: "13%",
    width: "6%",
    height: "3%",
  },
  editIcon: {
    width: "100%",
    height: "100%",
  },
  userInfo: {
    position: "absolute",
    top: 130,
    left: "50%",
    marginLeft: -40,
    alignItems: "center",
  },
  userName: {
    fontSize: FontSize.doubleExtraLargeTextRegular_size,
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  userHandle: {
    fontSize: FontSize.smallTextRegular_size,
    color: Color.colorGray_200,
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  profileImage: {
    position: "absolute",
    top: 120,
    left: 50,
    width: 83,
    height: 83,
    borderRadius: Border.br_21xl,
  },
  logoutButton: {
    position: "absolute",
    top: 700,
    left: "50%",
    marginLeft: -67,
  },
  logoutText: {
    fontSize: FontSize.mediumTextRegular_size,
    fontFamily: FontFamily.poppins,
    color: "#fb6d64",
    textAlign: "center",
  },
  inputContainer: {
    position: "absolute",
    top: 320,
    left: "50%",
    marginLeft: -160,
    width: 320,
  },
  inputField: {
    marginVertical: 10,
  },
  label: {
    fontSize: FontSize.largeTextMedium_size,
    color: Color.base100,
    fontFamily: FontFamily.extraLargeTextRegular,
  },
  inputWrapper: {
    backgroundColor: Color.colorGray_50,
    borderRadius: Border.br_21xl,
    padding: Padding.p_base,
  },
  inputText: {
    fontSize: FontSize.largeTextMedium_size,
    color: Color.base80,
  },
});

export default ProfilePage;
