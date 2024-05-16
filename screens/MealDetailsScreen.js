import React, { useCallback, useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useNavigation } from "@react-navigation/native";

const MealDetailsScreen = (props) => {
  const { route } = props;
  const navigation = useNavigation(); // or we could have just simply imported navigation directly from the pros in the above line.

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((item) => item.id === mealId);

  const {
    title,
    duration,
    complexity,
    affordability,
    imageUrl,
    ingredients,
    steps,
  } = selectedMeal;

  const headerButtonPressHandler = useCallback(() => {
    console.log("pressed!");
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="tap me!" onPress={headerButtonPressHandler} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>

      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#ffffff",
  },
  detailText: {
    color: "#ffffff",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

export default MealDetailsScreen;
