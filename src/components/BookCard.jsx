import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import { colors } from "../theme";
import CategoryComponent from "./CategoryComponent";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function BookCard({
  title,
  year,
  author,
  category,
  pageCount,
  coverUrl,
  onSelect,
}) {
  return (
    <View style={styles.card}>
      {/* Book details - opens BookDetails */}
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
        </View>
      </Pressable>

      {/* Add to Cart */}
      <Pressable
        style={styles.addToCartButton}
        onPress={() => onAddToCart(book)}
      >
        <Ionicons name="cart-outline" size={18} color="#FFFFFF" />
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
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
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 12,
    marginBottom: 16,
  },

  cardContent: {
    flexDirection: "row",
    gap: 12,
  },

  addToCartButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B87550",
    paddingVertical: 7,
    paddingHorizontal: 14,
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
});
