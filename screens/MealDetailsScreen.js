import {
  useCallback,
  // useContext,
  useLayoutEffect,
} from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favourites";
// import { FavoritesContext } from "../store/context/favorites-context";

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

  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  // const mealIsFavorite = favoriteMealsCtx.ids?.includes(mealId);
  const mealIsFavorite = favoriteMealIds?.includes(mealId);

  const dispatch = useDispatch();

  // const changeFavoriteStatusHandler = useCallback(() => {
  //   if (mealIsFavorite) {
  //     favoriteMealsCtx.removeFavorite(mealId);
  //   } else {
  //     favoriteMealsCtx.addFavorite(mealId);
  //   }
  // }, [favoriteMealsCtx, mealId, mealIsFavorite]);

  const changeFavoriteStatusHandler = useCallback(() => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }, [dispatch, mealId, mealIsFavorite]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            title="tap me!"
            onPress={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler, mealIsFavorite]);

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
