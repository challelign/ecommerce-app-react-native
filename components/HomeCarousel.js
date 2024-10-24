import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { theme } from "../constants/theme";
import { products } from "../constants/fakeData";

const { width } = Dimensions.get("window");

const HomeCarousel = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItem = ({ item }) => (
    <Image source={item.path} style={styles.imageCarousel} resizeMode="cover" />
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % products.length;
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
    flatListRef.current.scrollToIndex({ index, animated: true });
  };

  const renderIndicators = () => {
    return (
      <View style={styles.indicatorContainer}>
        {products.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.indicator,
              currentIndex === index && styles.activeIndicator,
            ]}
            onPress={() => handleIndexChange(index)}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={width}
        contentContainerStyle={styles.flatListContent}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
      {renderIndicators()}
    </View>
  );
};

export default HomeCarousel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.offWhite,
    marginHorizontal: theme.sizes.medium,
    borderRadius: theme.sizes.medium,
    overflow: "hidden",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContent: {
    paddingHorizontal: 0,
  },
  imageCarousel: {
    width: width,
    height: "100%",
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.darkGray, // Inactive color
    margin: 5,
    borderColor: theme.colors.whiteGray,
    borderWidth: 2, // Width of the border
  },
  activeIndicator: {
    backgroundColor: theme.colors.white, // Active color
  },
});
