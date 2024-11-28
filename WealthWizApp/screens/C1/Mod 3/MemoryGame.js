import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import NavBar1 from "../../../components/NavBar1"; 
import SingleCard from "../../../components/SingleCard";
import Button from "../../../components/Button";
import { Color } from "../../../GlobalStyles";

// 12 cards w diff names that connect definitions with phrases also allows for changing of background colors when correct/false
const cardImages = [
  { name: "Card1", label: "Stock", backgroundColor: "#708090", matched: false },
  { name: "Card1", label: "Stock def", backgroundColor: "#708090", matched: false },
  { name: "Card2", label: "Share", backgroundColor: "#708090", matched: false },
  { name: "Card2", label: "Share def", backgroundColor: "#708090", matched: false },
  { name: "Card3", label: "Index", backgroundColor: "#708090", matched: false },
  { name: "Card3", label: "Index def", backgroundColor: "#708090", matched: false },
  { name: "Card4", label: "Market Capitalization", backgroundColor: "#708090", matched: false },
  { name: "Card4", label: "The total value of a company's shares of stock", backgroundColor: "#708090", matched: false },
  { name: "Card5", label: "When a stock is in high demand...", backgroundColor: "#708090", matched: false },
  { name: "Card5", label: "...the stock price rises", backgroundColor: "#708090", matched: false },
  { name: "Card6", label: "Public Company", backgroundColor: "#708090", matched: false },
  { name: "Card6", label: "Public Company def", backgroundColor: "#708090", matched: false },
];

const MemoryGame = () => {
  const navigation = useNavigation();
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [checkMatch, setCheckMatch] = useState(true)

  // shuffles cards when called
  useEffect(() => {
    shuffleCards();
  }, []);

  // shuffles cards and assigns pairs
  const shuffleCards = () => {
    const shuffledCards = [...cardImages] 
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
    setDisabled(false);
  };

  // handles card choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compares two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo && (checkMatch === true)) {
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
      }
      else {
        setTimeout(resetTurn, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices and increase turns counter
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <View style={styles.container}>
      <NavBar1 />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Wealth of Memory</Text>
        <TouchableOpacity style={styles.button} onPress={shuffleCards}>
          <Text 
            style={styles.buttonText}>
            New Game
          </Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
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
        </View>
        <View style={styles.rowContainer}>
            <Button
            title="Match"
            onPress={() => setCheckMatch(true)}
            buttonColor={Color.colorSeagreen}
            textColor={Color.black0}
            height={45}
            width={105}
            />
            <Text style={styles.turns}>Turns: {turns}</Text>
            <Button
            title="No Match"
            onPress={resetTurn}
            buttonColor={Color.colorSeagreen}
            textColor={Color.black0}
            height={45}
            width={105}
            />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black0,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
  },
  scrollViewContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  title: {
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
    textAlign: "center"
  },
  cardGrid: {
    justifyContent: "center",
  },
  turns: {
    color: Color.colorSeagreen,
    fontSize: 20,
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    flex: 1,
    marginHorizontal: 5,

  }
});

export default MemoryGame;
