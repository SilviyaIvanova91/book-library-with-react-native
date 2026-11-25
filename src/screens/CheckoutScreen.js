import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";

import Button from "../components/Button";
import { colors } from "../theme";
import { useCart } from "../context/cart-context/useCart";

export default function CheckoutScreen({ navigation }) {
  const { cartItems, totalItems, totalOrderPrice, clearCart } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handlePlaceOrder = () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !address.trim()) {
      Alert.alert("Missing information", "Please complete all fields.");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }

    if (cartItems.length === 0) {
      Alert.alert("Empty cart", "Your cart is empty.");
      return;
    }

    Alert.alert(
      "Order successful!",
      `Thank you, ${name}! Your order has been placed.`,
      [
        {
          text: "Continue shopping",
          onPress: () => {
            clearCart();
            navigation.navigate("Main");
          },
        },
      ],
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.subtitle}>
        Almost there! Complete your order details.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery details</Text>

        <TextInput
          style={styles.input}
          placeholder="Full name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          style={[styles.input, styles.addressInput]}
          placeholder="Delivery address"
          value={address}
          onChangeText={setAddress}
          multiline
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order summary</Text>

        {cartItems.map((item) => (
          <View key={item.id} style={styles.orderItem}>
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.quantity}>Qty: {item.quantity || 1}</Text>
            </View>

            <Text style={styles.price}>
              {(item.price * (item.quantity || 1)).toFixed(2)} лв.
            </Text>
          </View>
        ))}

        <View style={styles.divider} />

        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Total ({totalItems} items)</Text>

          <Text style={styles.totalPrice}>
            {totalOrderPrice.toFixed(2)} лв.
          </Text>
        </View>
      </View>

      <Button
        title={`Place Order · ${totalOrderPrice.toFixed(2)} лв.`}
        onPress={handlePlaceOrder}
        style={styles.placeOrderButton}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 27,
    fontWeight: "700",
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary || "#888",
    marginTop: 6,
    marginBottom: 25,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 15,
  },
  input: {
    backgroundColor: colors.card || "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    fontSize: 14,
    color: colors.text,
  },
  addressInput: {
    minHeight: 80,
    textAlignVertical: "top",
  },
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  bookInfo: {
    flex: 1,
    marginRight: 10,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },
  quantity: {
    fontSize: 12,
    color: colors.textSecondary || "#888",
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border || "#eee",
    marginVertical: 12,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.primary || "#007AFF",
  },
  placeOrderButton: {
    marginTop: 5,
  },
});
