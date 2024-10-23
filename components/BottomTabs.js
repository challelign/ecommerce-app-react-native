import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../constants/theme";
import ProfileScreen from "./screens/ProfileScreen";
import CartScreen from "./screens/CartScreen";
import SearchScreen from "./screens/SearchScreen";

const Tabs = createBottomTabNavigator();
// to hide the name level to the tabs
const screenOptions = {
  tabBarShowLabel: true,
};
const BottomTabs = () => {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"} // home icon
                size={theme.sizes.xLarge}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"} // home icon
                size={theme.sizes.xLarge}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
          title: "Cart Items",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "cart" : "cart-outline"} // cart icon
                size={theme.sizes.xLarge}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"} // person icon
                size={theme.sizes.xLarge}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
