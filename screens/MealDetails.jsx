import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView
} from "react-native";
import MEALS from "../store/meals";
import CATEGORIES from "../store/categories";
import Icon from "react-native-vector-icons/Ionicons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import IoniconsHeaderButton from "../components/IoniconsHeaderButton";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const MealDetails = props => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(item => item.id === mealId);

  const catNames = [];
  selectedMeal.categoryIds.forEach(item => {
    const cat = CATEGORIES.find(cat => cat.id === item);
    catNames.push(cat.title);
  });

  renderCategories = () => {
    return catNames.map((item, index) => {
      return (
        <Text style={styles.catName} key={index}>
          {item}
        </Text>
      );
    });
  };

  renderIngredients = () => {
    return selectedMeal.ingredients.map((item, index) => (
      <Text key={index} style={styles.ingredient}>
        {index + 1}) {item}
      </Text>
    ));
  };

  renderSteps = () => {
    return selectedMeal.steps.map((item, index) => (
      <Text key={index} style={styles.step}>
        {index + 1}) {item}
      </Text>
    ));
  };

  renderNutritionInfo = () => {
    return (
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.infoLabel}>isGlutenFree</Text>
          <Text style={styles.infoText}>
            {selectedMeal.isGlutenFree ? (
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            ) : (
              <Ionicons name="md-checkmark-circle" size={32} color="red" />
            )}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoLabel}>isVegan</Text>
          <Text style={styles.infoText}>
            {selectedMeal.isVegan ? (
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            ) : (
              <Ionicons name="md-checkmark-circle" size={32} color="red" />
            )}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoLabel}>isVegetarian</Text>
          <Text style={styles.infoText}>
            {selectedMeal.isVegetarian ? (
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            ) : (
              <Ionicons name="md-checkmark-circle" size={32} color="red" />
            )}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoLabel}>isLactoseFree</Text>
          <Text style={styles.infoText}>
            {selectedMeal.isLactoseFree ? (
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            ) : (
              <Ionicons name="md-checkmark-circle" size={32} color="red" />
            )}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.imgContainer}>
        <ImageBackground
          source={{ uri: selectedMeal.imageUrl }}
          style={{ width: "100%", height: "100%" }}
        ></ImageBackground>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.parag}>Title: </Text>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <Text style={styles.parag}>Duration: </Text>
        <Text style={styles.title}>{selectedMeal.duration} mintues</Text>

        <Text style={styles.parag}>Complexity: </Text>
        <Text style={styles.title}>{selectedMeal.complexity}</Text>

        <Text style={styles.parag}>Affordability: </Text>
        <Text style={styles.title}>{selectedMeal.affordability}</Text>

        <Text style={styles.parag}>Categories: </Text>
        <View style={styles.categories}>{renderCategories()}</View>
        <Text style={styles.parag}>Ingredients:</Text>
        <View style={styles.ingredients}>{renderIngredients()}</View>
        <Text style={styles.parag}>Steps:</Text>
        <View style={styles.steps}>{renderSteps()}</View>
        <Text style={styles.parag}>Nutrition Info:</Text>
        <View>{renderNutritionInfo()}</View>
      </View>
    </ScrollView>
  );
};

MealDetails.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(item => item.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item
          title="favorite"
          iconName="ios-star"
          onPress={() => alert("mark as favorite")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 10,
    overflow: "hidden"
  },
  imgContainer: {
    height: 250,
    borderRadius: 7,
    overflow: "hidden",
    marginBottom: 10
  },
  detailContainer: {
    height: "auto",
    marginBottom: 50
  },
  title: {
    fontSize: 18,
    marginBottom: 10
  },
  categories: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  catName: {
    backgroundColor: Colors.info,
    marginRight: 10,
    color: "white",
    padding: 5,
    borderRadius: 5,
    width: "auto",
    textAlign: "center"
  },
  parag: {
    width: "100%",
    marginVertical: 10,
    fontSize: 20,
    fontFamily: "roboto-bold"
  },
  ingredients: {},
  ingredient: {
    fontSize: 15,
    fontFamily: "roboto-regular"
  },
  steps: {},
  step: {
    fontSize: 15,
    fontFamily: "roboto-regular"
  },
  infoContainer: {},
  info: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "100%",
    marginBottom: 10
  },
  infoLabel: {
    justifyContent: "center",
    flex: 1
  },
  infoText: {
    justifyContent: "center",
    flex: 1,
    alignItems: "flex-end"
  }
});

export default MealDetails;
