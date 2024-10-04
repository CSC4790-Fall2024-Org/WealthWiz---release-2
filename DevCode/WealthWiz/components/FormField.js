import * as React from "react";
import { StyleSheet, View } from "react-native";
import FormField1 from "./FormField1";

const FormField = () => {
  return (
    <View style={styles.formField}>
      <FormField1
        stateDefaultPlaceholderText="#000"
        stateDefaultPlaceholder="Default Label"
        propTop={95}
        propFontWeight="700"
        propFontFamily="Lexend"
        propFontSize={12}
        propLeft={20}
        propWidth={600}
        propMarginLeft="unset"
      />
      <FormField1
        stateDefaultPlaceholderText="#cbd2da"
        stateDefaultPlaceholder="Default Label"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formField: {
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    borderWidth: 1,
    width: 647,
    height: 170,
    overflow: "hidden",
  },
});

export default FormField;
