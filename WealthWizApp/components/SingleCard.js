import React, { useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, Image } from "react-native";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const flipAnimation = useRef(new Animated.Value(0)).current;

  // Flip animation: 0 (unflipped) to 1 (flipped)
  useEffect(() => {
    Animated.timing(flipAnimation, {
      toValue: flipped ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [flipped]);

  // Interpolate rotation for front and back
  const frontRotation = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const backRotation = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <View style={styles.card}>
      <Animated.View
        style={[
          styles.cardFace,
          styles.front,
          { transform: [{ rotateY: frontRotation }] },
        ]}
      >
        <TouchableOpacity onPress={handleClick} disabled={disabled}>
          <Image source={require("../assets/cover.png")} style={styles.coverImage } />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.cardFace,
          styles.back,
          { transform: [{ rotateY: backRotation }] },
        ]}
      >
        <View style={[styles.cardContent, { backgroundColor: card.backgroundColor }]}>
          <Text style={styles.cardText}>{card.label}</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 150,
    margin: 10,
  },
  cardFace: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden", // Ensures only one side is visible at a time
    borderRadius: 6,
  },
  front: {
    zIndex: 2, // Front is visible by default
  },
  back: {
    zIndex: 1,
  },
  coverImage: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
});

