import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";
import Animated, {
  withSpring,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
} from "react-native-reanimated";
import { useEffect } from "react";

function Home() {
  let x = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: x.value }],
    };
  });
  useEffect(() => {
    x.value = withRepeat(withSpring(1.2), -1, true);
  }, []);
  return (
    <ScrollView
      style={[s.container]}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View style={[s.box, reanimatedStyle]}></Animated.View>
      <Animated.View style={[s.box, reanimatedStyle]}></Animated.View>
      <Animated.View style={[s.box, reanimatedStyle]}></Animated.View>
      <Animated.View style={[s.box, reanimatedStyle]}></Animated.View>
      <Animated.View style={[s.box, reanimatedStyle]}></Animated.View>
    </ScrollView>
  );
}

export default function Tab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen name="Hello" component={Home} />
      <Tab.Screen name="About" component={Home} />
    </Tab.Navigator>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 20,
    margin: 20,
  },
});
