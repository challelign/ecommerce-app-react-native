import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/DetailScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" title="Home" component={HomeScreen} />
        <Stack.Screen name="DetailData" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
