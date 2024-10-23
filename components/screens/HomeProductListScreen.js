import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fetchHomeProduct } from "../../hooks/fetchHomeProduct";

const HomeProductListScreen = () => {
  fetchHomeProduct();
  return (
    <View>
      <Text>HomeProductListScreen</Text>
    </View>
  );
};

export default HomeProductListScreen;

const styles = StyleSheet.create({});
