import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeHeading = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity onPress={() => nav.navigate("ProductList")}>
          <Entypo name="grid" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeading;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.sizes.small + 2,
    marginTop: theme.sizes.medium,
  },
  headerTitle: {
    fontSize: theme.sizes.xLarge - 4,
    fontFamily: "Roboto_700Bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
