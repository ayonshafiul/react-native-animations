import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import DoubleTap from "../screens/DoubleTap";
import Home from "../screens/Home";
import Interpolate from "../screens/Interpolate";
import InterpolateColor from "../screens/InterpolateColor";
import PanGesture from "../screens/PanGesture";

export default function Tab() {
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        showLabel: false,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Pan Gesture" component={PanGesture} />
      <Drawer.Screen name="Interpolate" component={Interpolate} />
      <Drawer.Screen name="Interpolate Color" component={InterpolateColor} />
      <Drawer.Screen name="Double Tap" component={DoubleTap} />
    </Drawer.Navigator>
  );
}


