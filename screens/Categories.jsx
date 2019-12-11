import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CATEGORIES from "../store/categories";
import Colors from "../constants/Colors";
import CategoryGridTile from "../components/CategoryGridTile";

const Categories = props => {
  const renderCategories = item => {
    return (
      <CategoryGridTile
        item={item}
        onPress={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: item.id
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.categoriesContainer}
        numColumns={2}
        data={CATEGORIES}
        renderItem={({ item }) => renderCategories(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

Categories.navigationOptions = {
  title: "Categories"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 3
  },
  categoriesContainer: {}
});

export default Categories;
