import { FlatList, SafeAreaView } from "react-native";
import { images } from "../../constants/fakeData";
import ProductCard from "../ProductCard";

export default function ProductList() {
  const renderItem = ({ item }) => {
    return <ProductCard item={item} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
