import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Padding, Border, FontSize } from "../GlobalStyles";

const Button2 = ({ title, onPress, buttonColor, textColor, borderColor, height, width }) => {
  return (
    <Pressable 
      style={[
        styles.button, 
        { backgroundColor: buttonColor, height, width },
        borderColor ? { borderWidth: 2, borderColor: borderColor } : null
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_21xl,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Always absolute positioning
    bottom: 100,          // Always 100 pixels from the bottom
  },
  buttonText: {
    fontSize: FontSize.extraLargeTextRegular_size,
    textAlign: "center",
    fontFamily: 'lexend-regular',
  },
});

export default Button2;