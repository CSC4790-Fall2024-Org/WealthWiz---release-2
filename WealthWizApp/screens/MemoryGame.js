import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import SingleCard from '../components/SingleCard'; 

const cardImages = [
  { src: require('../assets/helment-1.png'), matched: false },
  { src: require('../assets/potion-1.png'), matched: false },
  { src: require('../assets/ring-1.png'), matched: false },
  { src: require('../assets/scroll-1.png'), matched: false },
  { src: require('../assets/shield-1.png'), matched: false },
  { src: require('../assets/sword-1.png'), matched: false },
];

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card;
          })
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset choices and increase turn count
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Magic Match</Text>
      <TouchableOpacity style={styles.button} onPress={shuffleCards}>
        <Text style={styles.buttonText}>New Game</Text>
      </TouchableOpacity>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        contentContainerStyle={styles.cardGrid}
        renderItem={({ item }) => (
          <SingleCard
            card={item}
            handleChoice={handleChoice}
            flipped={item === choiceOne || item === choiceTwo || item.matched}
            disabled={disabled}
          />
        )}
      />
      <Text style={styles.turns}>Turns: {turns}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1523',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#c23866',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardGrid: {
    alignItems: 'center',
  },
  turns: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
  },
});