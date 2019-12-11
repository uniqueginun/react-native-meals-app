import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const IoniconsHeaderButton = passMeFurther => (
  <HeaderButton
    {...passMeFurther}
    IconComponent={Ionicons}
    iconSize={23}
    color={Colors.mainYello}
  />
);

export default IoniconsHeaderButton;
