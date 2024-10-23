import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/screens/HomeScreen";
import ProductList from "./components/screens/ProductListScreen";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

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
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductList" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
