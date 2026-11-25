import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { colors } from "../theme";
import { useCart } from "../context/cart-context/useCart";

export default function BookDetailsScreen({ route, navigation }) {
  const { addToCart } = useCart();
  const [isFavourite, setIsFavourite] = useState(false);

  const handleAddToCart = () => {
    addToCart(book);
    navigation.navigate("CartMain");
  };

  const book = route.params?.book;
  if (!book) {
    return <Text>Book not found.</Text>;
  }

  const toggleFavourite = () => {
    setIsFavourite((current) => !current);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topBar}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={20} color={colors.text} />
          <Text style={styles.backText}>Back</Text>
        </Pressable>

        <Pressable
          style={[
            styles.favouriteButton,
            isFavourite && styles.favouriteButtonActive,
          ]}
          onPress={toggleFavourite}
        >
          <Ionicons
            name={isFavourite ? "heart" : "heart-outline"}
            size={23}
            color={isFavourite ? "#FFFFFF" : colors.accent}
          />
        </Pressable>
      </View>

      <Image source={{ uri: book.coverUrl }} style={styles.cover} />

      <View style={styles.infoBox}>
        <Text style={styles.title}>{book.title}</Text>

        <Text style={styles.author}>{book.author}</Text>

        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionHeader}>
            <Ionicons name="book-outline" size={19} color={colors.accent} />
            <Text style={styles.descriptionTitle}>About this book</Text>
          </View>

          <Text style={styles.description}>
            {book.description || "No description available for this book."}
          </Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{Number(book.price).toFixed(2)} €</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Ionicons name="calendar-outline" size={20} color={colors.accent} />
            <Text style={styles.meta}>{book.year}</Text>
            <Text style={styles.detailLabel}>Published</Text>
          </View>

          <View style={styles.verticalDivider} />

          <View style={styles.detailItem}>
            <Ionicons name="book-outline" size={20} color={colors.accent} />
            <Text style={styles.meta}>{book.pageCount}</Text>
            <Text style={styles.detailLabel}>Pages</Text>
          </View>
        </View>
      </View>

      <View style={styles.cartContainer}>
        <Pressable style={styles.addToCartButton} onPress={handleAddToCart}>
          <Ionicons name="cart-outline" size={22} color="#FFFFFF" />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: "center",
  },
  topBar: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.card,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.border,
  },
  backText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "600",
  },
  favouriteButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  favouriteButtonActive: {
    backgroundColor: "#E85D75",
    borderColor: "#E85D75",
  },
  cover: {
    width: 220,
    height: 330,
    borderRadius: 14,
    marginBottom: 24,
    resizeMode: "cover",
  },
  infoBox: {
    alignSelf: "stretch",
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    color: colors.text,
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 34,
  },
  author: {
    color: colors.accent,
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
    textAlign: "center",
  },
  priceContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 18,
    marginBottom: 5,
  },

  priceLabel: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: "500",
  },

  price: {
    color: "#B87550",
    fontSize: 24,
    fontWeight: "800",
  },

  descriptionContainer: {
    marginTop: 25,
    padding: 16,
    backgroundColor: colors.background,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },

  descriptionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginBottom: 12,
  },

  descriptionTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800",
  },

  description: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 23,
    textAlign: "left",
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 22,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 22,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  detailItem: {
    alignItems: "center",
    gap: 6,
    flex: 1,
  },
  meta: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "800",
  },
  detailLabel: {
    color: colors.textMuted,
    fontSize: 12,
  },
  verticalDivider: {
    width: 1,
    height: 55,
    backgroundColor: colors.border,
  },
  cartContainer: {
    alignItems: "center",
    marginTop: 25,
  },

  addToCartButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B87550",
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 18,
    gap: 10,
  },

  addToCartText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});
