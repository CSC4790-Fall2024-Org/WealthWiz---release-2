import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const NavBar1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      <Pressable style={styles.backButton} onPress={navigation.goBack}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back-button.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    marginTop: 50,
    width: '90%',
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
  },
  backButton: {
    width: 80,
    height: 80, 
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default NavBar1;