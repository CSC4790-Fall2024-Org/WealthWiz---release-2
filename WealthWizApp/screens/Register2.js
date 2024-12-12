import React, { useState } from "react";
import Button2 from "../components/Button2";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormField from "../components/FormField";
import { createUserWithEmailAndPassword } from "firebase/auth";
import NavBar1 from "../components/NavBar1";
import {Color} from "../GlobalStyles";
import { auth, db } from "../firebaseConfig";  // Ensure db is imported
import { doc, setDoc } from "firebase/firestore";  // Import Firestore functions

const Register2 = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleRegistration = async () => {
    if (password !== confirmPassword) {
      setModalMessage("Passwords do not match!");
      setModalVisible(true);
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // After user is created, store username in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        createdAt: new Date(),
      });

      setModalMessage('Registration successful!');
      setModalVisible(true);
      navigation.navigate("HomePage");
    } catch (error) {
      setModalMessage(`Error: ${error.message}`);
      setModalVisible(true);
    }

    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   setModalMessage('Registration successful!');
    //   setModalVisible(true);
    //   navigation.navigate("HomePage");
    // } catch (error) {
    //   setModalMessage(`Error: ${error.message}`);
    //   setModalVisible(true);
    // }
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
          placeholder="Email*"
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
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          width="80%"
        />
        <Button2
          title="Next" 
          onPress={() => {
            handleRegistration();
          }}
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
    backgroundColor: "rgba(60, 60, 67, 0.6)",
    borderRadius: 10,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: Color.colorSeagreen
  },
  modalMessage: {
    marginBottom: 20,
    textAlign: "center",
    color: Color.black0,
    fontSize: 20,
  },
  modalButton: {
    color: Color.colorBlue,
    fontWeight: "bold",
  },
});

export default Register2;
