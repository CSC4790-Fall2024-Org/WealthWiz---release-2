import React, { useState, useRef } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const NumberField = ({ placeholder, value, onChangeText, secureTextEntry = false, width = '100%', keyboardType = 'phone-pad' }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null); // Create a ref for the TextInput

  const formatPhoneNumber = (input) => {
    // Remove non-digit characters
    const digits = input.replace(/\D/g, "");

    // Format the phone number
    let formattedNumber = "";
    if (digits.length > 0) {
      formattedNumber += "(" + digits.substring(0, 3); // First 3 digits in parentheses
    }
    if (digits.length > 3) {
      formattedNumber += ") " + digits.substring(3, 6); // Next 3 digits
    }
    if (digits.length > 6) {
      formattedNumber += "-" + digits.substring(6, 10); // Last 4 digits
    }
    
    return formattedNumber.trim();
  };

  const handleChange = (text) => {
    const formattedText = formatPhoneNumber(text);
    onChangeText(formattedText);

    // Check if the formatted text has 10 digits
    const digitCount = formattedText.replace(/\D/g, "").length;
    if (digitCount === 10) {
      // Hide keyboard if the phone number is valid
      inputRef.current.blur(); // Dismiss the keyboard
    }
  };

  return (
    <View style={{ width }}>
      <TextInput
        ref={inputRef} // Attach the ref to the TextInput
        style={[
          styles.inputField,
          { borderColor: isFocused ? "#0693F1" : "#ccc" }
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange} // Call handleChange instead
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
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

export default NumberField;