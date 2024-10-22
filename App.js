import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WelcomeView from "./components/WelcomeView";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <WelcomeView />
    </SafeAreaView>
  );
}
