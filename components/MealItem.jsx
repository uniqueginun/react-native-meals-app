import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const MealItem = props => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => props.onClick()}>
        <View style={styles.body}>
          <ImageBackground
            style={{ width: "100%", height: "100%" }}
            source={{ uri: props.meal.imageUrl }}
          >
            <Text numberOfLines={1} style={styles.title}>
              {props.meal.title}
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.footer}>
          <Text>{props.meal.duration} mins</Text>
          <Text>{props.meal.complexity}</Text>
          <Text>{props.meal.affordability}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: 200,
    margin: 5,
    borderRadius: 5,
    overflow: "hidden"
  },
  body: {
    height: "85%"
  },
  footer: {
    height: "15%",
    backgroundColor: "#ffe6ee",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  title: {
    backgroundColor: "black",
    color: "white",
    opacity: 0.5,
    paddingVertical: 10,
    textAlign: "center",
    fontFamily: "droid-serf-bold",
    fontSize: 16
  }
});

export default MealItem;
