import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Home from "../screens/Home";
import Interpolate from "../screens/Interpolate";
import PanGesture from "../screens/PanGesture";

export default function Tab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pan Gesture" component={PanGesture} />
      <Tab.Screen name="Interpolate" component={Interpolate} />
    </Tab.Navigator>
  );
}

const s = StyleSheet.create({});
