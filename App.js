import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "./components/screens/ProductListScreen";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import BottomTabs from "./components/screens/BottomTabs";
import ProductDetail from "./components/screens/ProductDetailScreen";
import ProductDetailScreen from "./components/screens/ProductDetailScreen";

const Stack = createNativeStackNavigator();

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn); // it's good to explicitly catch and inspect any error

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("Event is triggered", fontsLoaded);
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log("Fonts is not loaded");
    return null;
  } else {
    console.log("Fonts is Loaded");
  }
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 70,
          },
          // headerShown: true, // Set to false if you want to hide headers by default
          // title: "Default Title", // Default title if not specified in screen options
          // headerStyle: {
          //   backgroundColor: "#f4511e", // Customize header background color
          // },
          // headerTintColor: "#fff", // Customize header text color
          // headerTitleStyle: {
          //   fontWeight: "bold", // Customize header title font weight
          // },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabs}
          options={{
            headerShown: false,
            title: "Home",
            tabBarStyle: {
              backgroundColor: "#f4511e", // Set tab bar background color
              borderTopWidth: 1, // Optional: Add border at the top
              borderTopColor: "#ccc", // Optional: Set border color
            },
          }}
        />
        <Stack.Screen
          name="ProductListScreen"
          component={ProductList}
          options={{
            // headerShown: false,
            title: "Product List",
          }}
        />

        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={{
            // headerShown: false,
            title: "Product Detail",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
