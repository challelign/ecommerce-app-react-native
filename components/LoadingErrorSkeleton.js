import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const LoadingSkeleton = ({ source, style, flex, height, width }) => {
  return (
    <View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          ...(flex ? { flex: 1 } : {}),
        },
        style,
      ]}
    >
      <LottieView
        source={source}
        autoPlay
        loop
        style={{ width: parseFloat(width), height: parseFloat(height) }} // Use parseFloat to ensure numeric values
      />
    </View>
  );
};
const LoadingErrorSkeleton = ({ isLoading, error }) => {
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
  if (isLoading) {
    return (
      <LoadingSkeleton
        source={require("../assets/json/animation-loading.json")}
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }} // Custom styles can be added here
        flex={true} // Pass false to include flex: {}
        width={300} // Pass as a number, or as a string without quotes
        height={300} // Pass as a number, or as a string without quotes
      />
    );
  }

  return null;
};

export default LoadingErrorSkeleton;
