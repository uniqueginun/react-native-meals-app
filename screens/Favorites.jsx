import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Favorites = props => {
  return (
    <View style={styles.screen}>
      <Text>Favorites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default Favorites;
