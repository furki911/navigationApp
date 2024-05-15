import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealDetailsScreen = (props) => {
  const { route } = props;
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((item) => item.id === mealId);
  const { duration, complexity, affordability, imageUrl, ingredients, steps } =
    selectedMeal;

  return (
    <View>
      <Image source={{ uri: imageUrl }} />
      <Text>title</Text>

      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
      <Text>Ingredients</Text>
      {ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailsScreen;
