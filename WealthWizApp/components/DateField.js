import React, { useState } from "react";
import { StyleSheet, Pressable, View, Text, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Color } from "../GlobalStyles";

const DateField = ({ placeholder, value, onChangeText, width = '100%' }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [borderColor, setBorderColor] = useState("#ccc"); // Initial border color

  const currentYear = new Date().getFullYear();

  const onDateChange = (event, date) => {
    if (date) {
      setSelectedDate(date);
      const formattedDate = date.toLocaleDateString();
      onChangeText(formattedDate);

      // Only close the DateTimePicker if the selected year is not the current year
      if (date.getFullYear() < currentYear) {
        setShowDatePicker(false);
        setBorderColor("#ccc"); // Reset border color when the date picker is closed
      }
    }
  };

  const handlePress = () => {
    setShowDatePicker(true);
    setBorderColor("#0693F1"); // Change border color when pressed
  };

  return (
    <View style={{ width }}>
      <Pressable onPress={handlePress}>
        <View
          style={[
            styles.inputField,
            { borderColor: borderColor } // Use the state for border color
          ]}
        >
          <Text style={[styles.textInput, { color: value ? "#000" : "#ccc" }]}>
            {value || placeholder}
          </Text>
        </View>
      </Pressable>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onDateChange}
          maximumDate={new Date()} // Optional: Prevent selecting future dates
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    backgroundColor: Color.colorWhite,
    justifyContent: 'center', // Center the placeholder or value
  },
  textInput: {
    fontFamily: 'lexend-regular',
    fontSize: 18,
  },
});

export default DateField;
