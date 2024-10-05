import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Color } from "../GlobalStyles";

const FormField = ({ placeholder, value, onChangeText, secureTextEntry = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[
        styles.inputField,
        { borderColor: isFocused ? "#0693F1" : "#ccc" }
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
    width: '100%',
    backgroundColor: Color.colorWhite,
    fontFamily: 'lexend-regular',
    fontSize: 18,
  },
});

export default FormField;
