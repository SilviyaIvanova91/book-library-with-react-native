import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import RootNavigator from "./navigation/RootNavigator";
import { BookProvider } from "./context/BookContext";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FBF7F1" />
      <BookProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </BookProvider>
    </>
  );
}
