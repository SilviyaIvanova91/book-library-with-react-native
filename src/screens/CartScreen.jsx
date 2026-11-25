import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CartLineItem from "../components/CartLineItem";
import Button from "../components/Button";
import { colors } from "../theme";
import { useCart } from "../context/cart-context/useCart";

export default function CartScreen({ navigation }) {
  const {
    cartItems,
    removeFromCart,
    incrementQty,
    decrementQty,
    totalOrderPrice,
    totalItems,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons
          name="bag-handle-outline"
          size={65}
          color={colors.textSecondary || "#999"}
        />

        <Text style={styles.emptyTitle}>Your cart is empty</Text>

        <Text style={styles.emptySubtitle}>
          Discover your next favorite book and add it to your cart.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Cart</Text>
        <Text style={styles.subtitle}>
          {totalItems} {totalItems === 1 ? "book" : "books"} in your cart
        </Text>
      </View>

      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartLineItem
            book={item}
            onIncrement={() => incrementQty(item.id)}
            onDecrement={() => decrementQty(item.id)}
            onRemove={() => removeFromCart(item.id)}
          />
        )}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal ({totalItems} items)</Text>

          <Text style={styles.summaryValue}>
            {totalOrderPrice.toFixed(2)} лв.
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.summaryRow}>
          <Text style={styles.totalLabel}>Total</Text>

          <Text style={styles.totalValue}>
            {totalOrderPrice.toFixed(2)} лв.
          </Text>
        </View>

        <Button
          title="Proceed to Checkout"
          onPress={() => navigation.navigate("Checkout")}
          style={styles.checkoutButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary || "#888",
    marginTop: 5,
  },
  list: {
    padding: 16,
    paddingBottom: 10,
  },
  footer: {
    padding: 20,
    backgroundColor: colors.card || "#fff",
    borderTopWidth: 1,
    borderTopColor: colors.border || "#eee",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: colors.textSecondary || "#888",
  },
  summaryValue: {
    fontSize: 15,
    color: colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border || "#eee",
    marginBottom: 14,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
  },
  totalValue: {
    fontSize: 21,
    fontWeight: "700",
    color: colors.primary || "#007AFF",
  },
  checkoutButton: {
    marginTop: 12,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  emptyTitle: {
    fontSize: 21,
    fontWeight: "700",
    color: colors.text,
    marginTop: 20,
  },
  emptySubtitle: {
    fontSize: 14,
    color: colors.textSecondary || "#888",
    textAlign: "center",
    lineHeight: 21,
    marginTop: 8,
  },
});
