import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal } from "react-native";
import { useNavigation } from "@react-navigation/core";
import NavBar1 from "../../../components/NavBar1"; 
import SingleCard from "../../../components/SingleCard";
import { Color } from "../../../GlobalStyles";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";

const cardImages = [
  { name: "Card1", label: "Stock", backgroundColor: "#708090", matched: false },
  { name: "Card1", label: "Ownership of a fraction of a corporation", backgroundColor: "#708090", matched: false },
  { name: "Card2", label: "Share", backgroundColor: "#708090", matched: false },
  { name: "Card2", label: "Units of stocks that represent ownership", backgroundColor: "#708090", matched: false },
  { name: "Card3", label: "Index", backgroundColor: "#708090", matched: false },
  { name: "Card3", label: "A tool for measuring change in a group of representative data", backgroundColor: "#708090", matched: false },
  { name: "Card4", label: "Market Capitalization", backgroundColor: "#708090", matched: false },
  { name: "Card4", label: "The total value of a company's shares of stock", backgroundColor: "#708090", matched: false },
  { name: "Card5", label: "When a stock is in high demand...", backgroundColor: "#708090", matched: false },
  { name: "Card5", label: "...the stock price rises", backgroundColor: "#708090", matched: false },
  { name: "Card6", label: "Public Company", backgroundColor: "#708090", matched: false },
  { name: "Card6", label: "Ownership is divided into shares and can be traded publically", backgroundColor: "#708090", matched: false },
];


const MemoryGame = () => {
  const navigation = useNavigation();
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);

  const updateUserProgress = async (progress) => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
  
      try {
        await setDoc(
          userDocRef,
          { progress: { module3: progress } },
          { merge: true }
        );
      } catch (error) {
        console.error("Error updating progress:", error);
      }
    }
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
    setDisabled(false);
    setShowWinModal(false);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.name === choiceTwo.name) {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.name === choiceOne.name ? { ...card, matched: true, backgroundColor: Color.colorSeagreen } : card
            )
          );
          resetTurn();
        }, 1000);
      } else {
        setTimeout(resetTurn, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setShowWinModal(true);
      const timer = setTimeout(() => {
        setShowWinModal(false); // Hide the modal
      }, 2000); // Show the modal for 2 seconds
  
      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }
  }, [cards]);
  
  useEffect(() => {
    if (!showWinModal && cards.length > 0 && cards.every((card) => card.matched)) {
      const navigationTimer = setTimeout(() => {
        navigation.goBack(); // Navigate back 2 seconds after modal is hidden
      }, 1000);

      updateUserProgress(3);
  
      return () => clearTimeout(navigationTimer); // Cleanup the timer if the component unmounts
    }
  }, [showWinModal]);  
  
  return (
    <View style={styles.container}>
      <NavBar1 />
      <Text style={styles.title}>Wealth of Memory</Text>
      <TouchableOpacity style={styles.button} onPress={shuffleCards}>
        <Text style={styles.buttonText}>New Game</Text>
      </TouchableOpacity>
      <FlatList
        data={cards}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SingleCard
            card={item}
            handleChoice={handleChoice}
            flipped={item === choiceOne || item === choiceTwo || item.matched}
            disabled={disabled}
          />
        )}
        contentContainerStyle={styles.cardGrid}
      />
      <Text style={styles.turns}>Turns: {turns}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showWinModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>You Win!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black0,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  title: {
    paddingTop: 40,
    fontSize: 28,
    fontWeight: "bold",
    color: Color.colorSeagreen,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Color.colorSeagreen,
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: Color.black0,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardGrid: {
    justifyContent: "center",
    alignItems: "center",
  },
  turns: {
    color: Color.colorSeagreen,
    fontSize: 20,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Color.colorSeagreen,
  },
});

export default MemoryGame;
