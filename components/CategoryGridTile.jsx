import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";

const CategoryGridTile = props => {
  const { item, onPress } = props;
  return (
    <TouchableOpacity style={styles.category} onPress={() => onPress()}>
      <View style={{ ...styles.cat, ...{ backgroundColor: item.color } }}>
        <Text style={styles.caText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: "#fff",
    height: 100,
    flex: 1,
    margin: 10
  },
  cat: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: 1,
    borderRadius: 10,
    padding: 15
  },
  caText: {
    color: "white",
    fontFamily: "roboto-regular"
  }
});

export default CategoryGridTile;
