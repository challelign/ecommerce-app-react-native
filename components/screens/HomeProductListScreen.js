import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fetchHomeProduct } from "../../hooks/fetchHomeProduct";

const HomeProductListScreen = () => {
  const { isLoading, error, data } = fetchHomeProduct();
  console.log(data);
  return (
    <View>
      {isLoading ? <Text>Loading ..</Text> : <Text>HomeProductListScreen</Text>}
    </View>
  );
};

export default HomeProductListScreen;

const styles = StyleSheet.create({});
