import * as React from "react";
import { useEffect } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Button from "../components/Button";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const StartScreenNewUser = () => {
  const navigation = useNavigation();
  let bankAnimation;

  useEffect(() => {
    bankAnimation.play();
  }, []);

  return (
    <View style={styles.startScreenNewUser}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <LottieView
        style={styles.logo}
        contentFit="cover"
        ref={(animation) => {
          bankAnimation = animation;
        }}
        source={require('../assets/BankAnimation.json')}
        autoPlay={true}
        loop={false}
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="Register" 
          onPress={() => navigation.navigate("Register1")} 
          buttonColor="transparent" 
          textColor={Color.black0} 
          borderColor={Color.black0}
          height={65}
          width={150}
        />
        <Button 
          title="Login" 
          onPress={() => navigation.navigate("Login")} 
          buttonColor={Color.black0} 
          textColor={Color.colorSeagreen} 
          height={65}
          width={150}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  startScreenNewUser: {
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
    marginTop: '50%',
    marginBottom: '50%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Ensures full width to space out buttons
    paddingHorizontal: 40,
  },
});

export default StartScreenNewUser;