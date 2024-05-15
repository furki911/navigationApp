import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealDetailsScreen = (props) => {
  const { route } = props;
  const mealId = route.params.mealId;
  const meal = MEALS.find((item) => item.id === mealId);
  const { duration, complexity, affordability, imageUrl } = meal;

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
      <Text>Steps</Text>
    </View>
  );
};

export default MealDetailsScreen;
