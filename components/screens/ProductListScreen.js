import { FlatList, SafeAreaView, Text, View } from "react-native";
import ProductCard from "../ProductCard";
import LoadingSkeleton from "../LoadingSkeleton";
import { fetchHomeProduct } from "../../hooks/fetchHomeProduct";

export default function ProductListScreen() {
  const { isLoading, error, data } = fetchHomeProduct();

  const renderItem = ({ item }) => {
    return <ProductCard item={item} />;
  };

  console.log("Error Message =>", error);
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
        source={require("../../assets/json/animation-loading.json")}
        style={{ backgroundColor: "white" }} // Custom styles can be added here
        flex={true} // Pass true to include flex: 1
        width={250} // Pass as a number, or as a string without quotes
        height={250} // Pass as a number, or as a string without quotes
      />
    );
  }
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
