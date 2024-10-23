import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";

export default function ProductCard({ item }) {
  console.log("items List =>", item);
  return (
    <View style={styles.imageContainer}>
      <Image source={item.path} style={styles.image} />
      <View style={styles.imageTitle}>
        <Text style={styles.titleText} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.priceText} numberOfLines={2}>
          {item.price}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: theme.colors.secondary,
    flex: 1,
    height: 260,
    margin: 10,
    borderRadius: theme.sizes.small,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: theme.sizes.small,
  },
  imageTitle: {
    padding: theme.sizes.small,
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  titleText: {
    fontSize: theme.sizes.medium,
    flexWrap: "wrap",
  },
  priceText: {
    marginTop: 5,
    marginBottom: 10,
  },
});
