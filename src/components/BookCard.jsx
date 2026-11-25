import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { colors } from "../theme";
import CategoryComponent from "./CategoryComponent";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/cart-context/useCart";

export default function BookCard({
  id,
  title,
  year,
  author,
  category,
  pageCount,
  price,
  coverUrl,
  onSelect,
  navigation,
}) {
  const { addToCart } = useCart();

  const handleAddToCart = (event) => {
    event.stopPropagation();

    addToCart({
      id,
      title,
      year,
      author,
      category,
      pageCount,
      price,
      coverUrl,
    });
    navigation.navigate("CartMain");
  };

  return (
    <View style={styles.card}>
      <Pressable style={styles.cardContent} onPress={onSelect}>
        <Image source={{ uri: coverUrl }} style={styles.cover} />

        <View style={styles.info}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{title}</Text>
          </View>

          <Text style={styles.author}>{author}</Text>

          <Text style={styles.meta}>
            {year}г. • {pageCount} страници
          </Text>

          <CategoryComponent category={category} />

          <View style={styles.priceContainer}>
            <Text style={styles.price}>{Number(price).toFixed(2)} €</Text>
          </View>
        </View>
      </Pressable>

      <Pressable style={styles.addToCartButton} onPress={handleAddToCart}>
        <Ionicons name="cart-outline" size={18} color="#FFFFFF" />
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 12,
    marginBottom: 16,
  },
  cover: {
    width: 90,
    height: 135,
    borderRadius: 8,
    resizeMode: "cover",
  },
  info: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  title: {
    flex: 1,
    color: colors.text,
    fontSize: 17,
    fontWeight: "bold",
    lineHeight: 23,
  },
  author: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: "600",
    marginTop: 6,
  },
  genre: {
    color: colors.textMuted,
    fontSize: 13,
    marginTop: 8,
  },
  meta: {
    color: colors.textMuted,
    fontSize: 13,
    marginTop: 5,
  },

  cardContent: {
    flexDirection: "row",
    gap: 12,
  },
  priceContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 18,
    marginBottom: 5,
    paddingRight: 10,
  },

  price: {
    color: "#B87550",
    fontSize: 20,
    fontWeight: "800",
  },

  addToCartButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B87550",
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginTop: 8,
    gap: 6,
    alignSelf: "flex-end",
  },

  addToCartText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  cartButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 8,
    gap: 5,
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
