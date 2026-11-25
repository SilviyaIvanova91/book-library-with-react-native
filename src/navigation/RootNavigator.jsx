import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import BookDetailsScreen from "../screens/BookDetailsScreen";
import CatalogScreen from "../screens/CatalogScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

export default function RootNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CatalogScreen"
        component={CatalogScreen}
        options={{ title: "Search Results" }}
      />
      <Stack.Screen
        name="BookDetails"
        component={BookDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartMain"
        component={CartScreen}
        options={{ title: "Cart" }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ title: "Checkout" }}
      />
    </Stack.Navigator>
  );
}
