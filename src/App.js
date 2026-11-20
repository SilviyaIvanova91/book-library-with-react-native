import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FBF7F1" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}
