import React, { useState, useMemo, useCallback } from "react";
import { Pressable, StyleSheet, View, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Settings from "./Settings";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavBar = ({
  navBarPosition,
  navBarMarginLeft,
  navBarTop,
  navBarLeft,
  showIcon,
}) => {
  const navBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", navBarPosition),
      ...getStyleValue("marginLeft", navBarMarginLeft),
      ...getStyleValue("top", navBarTop),
      ...getStyleValue("left", navBarLeft),
    };
  }, [navBarPosition, navBarMarginLeft, navBarTop, navBarLeft]);

  const navigation = useNavigation();
  const [menuContainerVisible, setMenuContainerVisible] = useState(false);

  const openMenuContainer = useCallback(() => {
    setMenuContainerVisible(true);
  }, []);

  const closeMenuContainer = useCallback(() => {
    setMenuContainerVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.navBar, navBarStyle]}>
        <Pressable
          style={[styles.backButton, styles.menuChildPosition]}
          onPress={() => navigation.goBack()}
        >
          {showIcon && (
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/back-button.png")}
            />
          )}
        </Pressable>
        <Pressable
          style={[styles.menu, styles.menuPosition]}
          onPress={openMenuContainer}
        >
          <Image
            style={[styles.menuChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-19.png")}
          />
          <Image
            style={[styles.button1Icon, styles.menuPosition]}
            contentFit="cover"
            source={require("../assets/button-1.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={menuContainerVisible}>
        <View style={styles.menuContainerOverlay}>
          <Pressable
            style={styles.menuContainerBg}
            onPress={closeMenuContainer}
          />
          <Settings onClose={closeMenuContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  menuChildPosition: {
    height: "95.45%",
    bottom: "2.27%",
    top: "2.27%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  menuPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  icon: {
    width: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "100%",
  },
  backButton: {
    right: "87.16%",
    width: "12.84%",
    left: "0%",
  },
  menuContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  menuContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  menuChild: {
    width: "95.45%",
    right: "2.27%",
    left: "2.27%",
    borderRadius: Border.br_xs,
    height: "95.45%",
    bottom: "2.27%",
    top: "2.27%",
    position: "absolute",
  },
  button1Icon: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    left: "0%",
  },
  menu: {
    width: "13.46%",
    left: "86.54%",
  },
  navBar: {
    width: 327,
    height: 44,
  },
});

export default NavBar;
