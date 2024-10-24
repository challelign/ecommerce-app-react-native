import { FlatList, SafeAreaView } from "react-native";
import ProductCard from "../ProductCard";
import { fetchHomeProduct } from "../../hooks/fetchHomeProduct";
import LoadingErrorSkeleton from "../LoadingErrorSkeleton";

export default function ProductListScreen() {
  const { isLoading, error, data } = fetchHomeProduct();

  const renderItem = ({ item }) => {
    return <ProductCard item={item} />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoadingErrorSkeleton isLoading={isLoading} error={error} />
      {!isLoading && !error && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
}
