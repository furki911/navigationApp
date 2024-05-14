import { Text, View } from "react-native";

const MealItem = (props) => {
  const { title } = props;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;
