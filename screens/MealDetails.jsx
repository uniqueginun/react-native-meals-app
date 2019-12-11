import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MEALS from "../store/meals";

const MealDetails = props => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(item => item.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>Meal Details Screen: {selectedMeal.title}</Text>
    </View>
  );
};

MealDetails.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(item => item.id === mealId);
  return {
    title: selectedMeal.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default MealDetails;
