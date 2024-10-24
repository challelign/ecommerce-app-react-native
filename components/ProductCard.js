import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ item }) {
  const nav = useNavigation();

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => nav.navigate("ProductDetailScreen")}>
        <Image source={item.path} style={styles.image} />
        <View style={styles.imageTitle}>
          <Text style={styles.titleText} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.priceText} numberOfLines={2}>
            {item.price}
          </Text>
        </View>
      </TouchableOpacity>
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
    fontSize: theme.sizes.medium + 4,
    flexWrap: "wrap",
    fontFamily: "Roboto_700Bold",
  },
  priceText: {
    marginTop: 5,
    marginBottom: 10,
  },
});
