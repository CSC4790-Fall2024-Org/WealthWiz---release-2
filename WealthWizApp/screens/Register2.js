import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import NavBar1 from "../components/NavBar1";
import {
  FontSize,
  FontFamily,
  Color,
} from "../GlobalStyles";

const Register2 = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleRegistration = async () => {
    if (password !== confirmPassword) {
      setModalMessage("Passwords do not match!");
      setModalVisible(true);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setModalMessage('Registration successful!');
      setModalVisible(true);
      navigation.navigate("HomePage");
    } catch (error) {
      setModalMessage(`Error: ${error.message}`);
      setModalVisible(true);
    }
  };

  return (
    <>
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
          onPress={handleRegistration}
          buttonColor={Color.colorSeagreen} 
          textColor={Color.black0} 
          height={65}
          width={350}
        />
        <NavBar1 />
      </View>

      <Modal animationType="fade" transparent visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalMessage}>{modalMessage}</Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButton}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
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
  modalOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: Color.white,
    borderRadius: 10,
    alignItems: "center",
  },
  modalMessage: {
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    color: Color.colorBlue,
    fontWeight: "bold",
  },
});

export default Register2;
