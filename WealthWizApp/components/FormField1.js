import React, { useMemo } from "react";
import { TextInput, StyleSheet } from "react-native";
import { FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormField1 = ({
  stateDefaultAutoCapitalize,
  stateDefaultPlaceholderText,
  stateDefaultPlaceholder,
  propTop,
  propFontWeight,
  propFontFamily,
  propFontSize,
  propLeft,
  propWidth,
  propMarginLeft,
}) => {
  const formFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("fontWeight", propFontWeight),
      ...getStyleValue("fontFamily", propFontFamily),
      ...getStyleValue("fontSize", propFontSize),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [
    propTop,
    propFontWeight,
    propFontFamily,
    propFontSize,
    propLeft,
    propWidth,
    propMarginLeft,
  ]);

  return (
    <TextInput
      style={[styles.statedefault, formFieldStyle]}
      placeholder={stateDefaultPlaceholder}
      placeholderTextColor={stateDefaultPlaceholderText}
      autoCapitalize={stateDefaultAutoCapitalize}
    />
  );
};

const styles = StyleSheet.create({
  statedefault: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 600,
    height: 55,
    fontWeight: "500",
    fontFamily: FontFamily.extraLargeTextRegular,
    fontSize: FontSize.largeTextMedium_size,
  },
});

export default FormField1;
