import { FlatList, SafeAreaView, Text, StyleSheet, View } from "react-native";
import WelcomeView from "../WelcomeView";
import HomeCarousel from "../HomeCarousel";
import { StatusBar } from "expo-status-bar";
import HomeHeading from "../HomeHeading";
import { fetchHomeProduct } from "../../hooks/fetchHomeProduct";
import ProductCard from "../ProductCard";
import LoadingErrorSkeleton from "../LoadingErrorSkeleton";

export default function HomeScreen() {
  const { isLoading, error, data } = fetchHomeProduct();
  console.log("Data From HomeScreen=>", data);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoadingErrorSkeleton isLoading={isLoading} error={error} />
      {!isLoading && !error && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard item={item} />}
          numColumns={2}
          ListHeaderComponent={() => (
            <>
              <StatusBar style="auto" />
              <WelcomeView />
              <HomeCarousel />
              <HomeHeading />
            </>
          )}
        />
      )}
    </SafeAreaView>
  );
}
