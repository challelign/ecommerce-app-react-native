import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fetchHomeProduct } from "../../hooks/fetchHomeProduct";
import LoadingSkeleton from "../LoadingSkeleton";

const HomeProductListScreen = () => {
  const { isLoading, error, data } = fetchHomeProduct();
  console.log(data);
  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Text style={{ color: "red", fontSize: 18 }}>Something went wrong</Text>
      </View>
    );
  }
  return (
    <View>
      {isLoading ? (
        <LoadingSkeleton
          source={require("../../assets/json/animation-loading.json")}
          style={{ backgroundColor: "white" }} // Custom styles can be added here
          flex={false} // Pass false to include flex: {}
          width={150} // Pass as a number, or as a string without quotes
          height={150} // Pass as a number, or as a string without quotes
        />
      ) : (
        <Text>HomeProductListScreen</Text>
      )}
    </View>
  );
};

export default HomeProductListScreen;

const styles = StyleSheet.create({});
