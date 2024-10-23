import { SafeAreaView } from "react-native";
import WelcomeView from "../WelcomeView";
import HomeCarousel from "../HomeCarousel";
import { StatusBar } from "expo-status-bar";
import HomeHeading from "../HomeHeading";
import HomeProductListScreen from "./HomeProductListScreen";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <WelcomeView />
      <HomeCarousel />
      <HomeHeading />
      <HomeProductListScreen />
    </SafeAreaView>
  );
}
