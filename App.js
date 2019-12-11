import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MainApplicationNavigator from "./navigator/MainApplicationNavigator";

const loadFonts = () => {
  return Font.loadAsync({
    "droid-serf-bold": require("./assets/fonts/DroidSerif-Bold.ttf"),
    "droid-serf-regular": require("./assets/fonts/DroidSerif-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
    "roboto-thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf")
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setDataLoaded(true)} />
    );
  }

  return <MainApplicationNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
