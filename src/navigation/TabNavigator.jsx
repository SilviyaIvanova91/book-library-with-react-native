import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import CatalogNavigator from "./CatalogNavigator";
import { useCart } from "../context/cart-context/useCart";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3CA495",
        tabBarInactiveTintColor: "#999999",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 65,
          paddingBottom: 8,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Books"
        component={CatalogNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
          tabBarBadge: cartCount > 0 ? cartCount : undefined,
        }}
      />
    </Tab.Navigator>
  );
}
