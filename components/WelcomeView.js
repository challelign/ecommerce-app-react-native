import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { theme } from "../constants/theme";

export default function WelcomeView() {
  let x = 20;

  return (
    <View>
      <View>
        <Text style={styles.welcomeTxt(theme.colors.black, 20)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeTxt(theme.colors.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() => {
            x = x + 1;
            console.log("The value of x is", x);
          }}
        >
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="What are your looking for ?"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.searchButton}>
          <Ionicons
            name="camera-outline"
            size={36}
            color={theme.colors.offWhite}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeTxt: (color, top) => ({
    fontSize: theme.sizes.xxLarge - 8,
    color: color,
    marginTop: top,
    marginHorizontal: theme.sizes.small,
    // textAlign: "center", // Centering the text for better visibility
  }),
  searchIcon: {
    marginTop: theme.sizes.small,
    color: theme.colors.gray,
    marginHorizontal: theme.sizes.xSmall,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 50,

    marginHorizontal: theme.sizes.small,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.sizes.medium,
    marginVertical: theme.sizes.medium,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: theme.sizes.small,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.sizes.small,
    marginRight: theme.sizes.small,
  },
  searchButton: {
    width: 50,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.sizes.medium,
  },
});
