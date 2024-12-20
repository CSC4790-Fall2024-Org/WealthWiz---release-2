import React from 'react';
import { Pressable, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Padding, Border, FontSize } from "../GlobalStyles";

const Button = ({ title, onPress, buttonColor, textColor, borderColor, height, width, disabled, opacity, top, left }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { backgroundColor: buttonColor, height, width, top, left, opacity, opacity: disabled ? 0.6 : 1 },
        borderColor ? { borderWidth: 2, borderColor: borderColor } : null,
      ]}
      onPress={onPress}
      disabled={disabled}
      
    >
      <Text style={[styles.buttonText, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_21xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: FontSize.extraLargeTextRegular_size,
    textAlign: "center",
    fontFamily: 'lexend-regular',
  },
});

export default Button;