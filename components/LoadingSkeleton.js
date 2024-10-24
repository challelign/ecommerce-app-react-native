import { View } from "react-native";
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

export default LoadingSkeleton;
