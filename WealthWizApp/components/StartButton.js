import React, { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const StartButton = ({
  continue1,
  startButtonPosition,
  startButtonTop,
  startButtonLeft,
  startButtonWidth,
  startButtonHeight,
  startButtonBackgroundColor,
  startButtonMarginTop,
  startButtonMarginLeft,
}) => {
  const startButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", startButtonPosition),
      ...getStyleValue("top", startButtonTop),
      ...getStyleValue("left", startButtonLeft),
      ...getStyleValue("width", startButtonWidth),
      ...getStyleValue("height", startButtonHeight),
      ...getStyleValue("backgroundColor", startButtonBackgroundColor),
      ...getStyleValue("marginTop", startButtonMarginTop),
      ...getStyleValue("marginLeft", startButtonMarginLeft),
    };
  }, [
    startButtonPosition,
    startButtonTop,
    startButtonLeft,
    startButtonWidth,
    startButtonHeight,
    startButtonBackgroundColor,
    startButtonMarginTop,
    startButtonMarginLeft,
  ]);

  return (
    <Pressable style={[styles.startButton, startButtonStyle]}>
      <Text style={styles.continue}>{continue1}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  continue: {
    fontSize: FontSize.extraLargeTextRegular_size,
    lineHeight: 26,
    fontFamily: FontFamily.extraLargeTextRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  startButton: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGold,
    width: 232,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StartButton;