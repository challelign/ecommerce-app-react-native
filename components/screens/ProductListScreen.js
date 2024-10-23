import { FlatList, SafeAreaView, Text, View } from "react-native";
import { images } from "../../constants/fakeData";
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";
import LottieView from "lottie-react-native";

export default function ProductListScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); //2 sec
    return () => clearTimeout(timer);
  }, []);

  const renderItem = ({ item }) => {
    return <ProductCard item={item} />;
  };

  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        {/* <LottieView source={require("../assets/json/Animation-rect.json")} /> */}
        <LottieView
          source={require("../../assets/json/animation-loading.json")}
          autoPlay
          loop
          style={{
            width: 250,
            height: 250,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>
    );
  }

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
