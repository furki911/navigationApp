import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = (props) => {
  const { navigation, route } = props;
  const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Hola {catId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
