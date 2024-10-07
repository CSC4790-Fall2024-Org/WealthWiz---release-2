import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar1 from "../../components/NavBar1";
import { Color } from "../../GlobalStyles";
import FormField from "../../components/FormField";
import Button2 from "../../components/Button2";

const Register2 = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <View style={styles.register2}>
      <Text style={styles.text}>
        Create Your Profile
      </Text>
      <FormField
        placeholder="Username*"
        value={username}
        onChangeText={setUsername}
        width="80%"
      />
      <FormField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        width="80%"
      />
      <FormField
        placeholder="Create Password*"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        width="80%"
      />
      <FormField
        placeholder="Confirm Password*"
        value={confirm}
        onChangeText={setConfirm}
        secureTextEntry={true}
        width="80%"
      />
      <Button2
        title="Next" 
        onPress={() => navigation.navigate("Register3")} 
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

export default Register2;
