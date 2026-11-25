import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import RootNavigator from "./navigation/RootNavigator";
import { BookProvider } from "./context/BookContext";
import CartProvider from "./context/cart-context/CartProvider";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FBF7F1" />
      <CartProvider>
        <BookProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </BookProvider>
      </CartProvider>
    </>
  );
}
