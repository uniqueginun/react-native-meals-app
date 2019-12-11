import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import CATEGORIES from "../store/categories";
import Colors from "../constants/Colors";
import MEALS from "../store/meals";
import MealItem from "../components/MealItem";
import meals from "../store/meals";

const CategoryMeals = props => {
  const categoryId = props.navigation.getParam("categoryId");
  const selectedCat = CATEGORIES.find(item => item.id === categoryId);

  const selectedCatMeals = MEALS.filter(item => {
    return item.categoryIds.indexOf(categoryId) !== -1;
  });

  const renderCategoryMeals = meal => {
    return (
      <View>
        <MealItem
          meal={meal}
          onClick={() => {
            props.navigation.navigate("MealDetails", {
              mealId: meal.id
            });
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={item => item.id}
        data={selectedCatMeals}
        renderItem={({ item }) => renderCategoryMeals(item)}
      />
    </View>
  );
};

CategoryMeals.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCat = CATEGORIES.find(item => item.id === catId);
  return {
    title: selectedCat.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default CategoryMeals;
