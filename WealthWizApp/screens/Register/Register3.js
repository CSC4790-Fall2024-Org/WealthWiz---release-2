import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar1 from "../../components/NavBar1";
import { Color } from "../../GlobalStyles";
import FormField from "../../components/FormField";
import DateField from "../../components/DateField";
import NumberField from "../../components/NumberField";
import Button2 from "../../components/Button2";

const Register3 = () => {
  const navigation = useNavigation();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  return (
    <View style={styles.register2}>
      <Text style={styles.text}>
        Personal Information
      </Text>
      <FormField
        placeholder="First Name"
        value={firstname}
        onChangeText={setFirstname}
        width="80%"
      />
      <FormField
        placeholder="Last Name"
        value={lastname}
        onChangeText={setLastname}
        width="80%"
      />
      <DateField
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        width="80%"
      />
      <NumberField
        placeholder="Phone Number"
        value={phonenumber}
        onChangeText={setPhonenumber}
        width="80%"
      />
      <Button2
        title="Finish" 
        onPress={() => navigation.navigate("HomePage")} 
        buttonColor={Color.colorSeagreen} 
        textColor={Color.black0} 
        height={65}
        width={350}
      />
      <NavBar1 />
    </View>
  );
};

const styles = StyleSheet.create({
  register2: {
    backgroundColor: Color.black0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 120,
  },
  text: {
    fontSize: 30,
    color: Color.colorDarkslategray_200,
    fontFamily: 'lexend-regular',
    paddingBottom: 20,
  },
});

export default Register3;
