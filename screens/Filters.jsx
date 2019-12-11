import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Filters = props => {
  return (
    <View style={styles.screen}>
      <Text>Filters Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default Filters;
