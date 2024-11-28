import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Color } from "../GlobalStyles";

const ContentBox = ({ placeholder, value, onChangeText, secureTextEntry = false, width = '100%' }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[
        styles.inputField,
        { borderColor: isFocused ? "#0693F1" : "#ccc", width }
      ]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    backgroundColor: Color.colorWhite,
    fontFamily: 'lexend-regular',
    fontSize: 18,
  },
});

export default ContentBox;