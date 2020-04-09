import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";

const StackNavigator = createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    DetailsScreen: { screen: DetailsScreen }
  },
  {
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(StackNavigator);
