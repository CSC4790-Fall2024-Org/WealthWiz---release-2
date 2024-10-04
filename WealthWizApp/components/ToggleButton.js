import React, { useState } from "react";
import { Switch, StyleSheet, View } from "react-native";

const ToggleButton = () => {
  const [groupSwitchSwitchValueState, setGroupSwitchSwitchValueState] =
    useState(false);

  return (
    <View style={styles.toggleButton}>
      <Switch
        style={styles.toggleButtonChild}
        disabled={false}
        value={groupSwitchSwitchValueState}
        onValueChange={setGroupSwitchSwitchValueState}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#cfcfcf" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toggleButtonChild: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  toggleButton: {
    width: 32,
    height: 20,
  },
});

export default ToggleButton;
