import CatalogScreen from "../screens/CatalogScreen";
import CategoryComponent from "../components/CategoryComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookDetailsScreen from "../screens/BookDetailsScreen";

export default function CatalogNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CatalogScreen"
        component={CategoryComponent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BookDetailsScreen"
        component={BookDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
