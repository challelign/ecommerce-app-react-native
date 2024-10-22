import { SafeAreaView } from "react-native";
import WelcomeView from "./WelcomeView";
import HomeCarousel from "./HomeCarousel";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <WelcomeView />
      <HomeCarousel />
    </SafeAreaView>
  );
}
