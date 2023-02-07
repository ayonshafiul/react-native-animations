import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import DoubleTap from "../screens/DoubleTap";
import Home from "../screens/Home";
import Interpolate from "../screens/Interpolate";
import InterpolateColor from "../screens/InterpolateColor";
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
      <Tab.Screen name="Interpolate Color" component={InterpolateColor} />
      <Tab.Screen name="Double Tap" component={DoubleTap} />
    </Tab.Navigator>
  );
}


