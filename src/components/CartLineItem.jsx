import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";

export default function CartLineItem({
  book,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: book.coverUrl }}
        style={styles.cover}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {book.title}
        </Text>

        <Text style={styles.author} numberOfLines={1}>
          {book.author}
        </Text>

        <Text style={styles.price}>
          {(Number(book.price) * book.quantity).toFixed(2)} лв.
        </Text>

        <View style={styles.bottomRow}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={onDecrement}
              disabled={book.quantity <= 1}
              style={styles.quantityButton}
            >
              <Ionicons
                name="remove"
                size={17}
                color={book.quantity <= 1 ? "#bbb" : colors.text}
              />
            </TouchableOpacity>

            <Text style={styles.quantity}>{book.quantity}</Text>

            <TouchableOpacity
              onPress={onIncrement}
              style={styles.quantityButton}
            >
              <Ionicons name="add" size={17} color={colors.text} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
            <Ionicons name="trash-outline" size={18} color="#D96C6C" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.card || "#fff",
    borderRadius: 14,
    padding: 12,
    marginBottom: 14,
  },
  cover: {
    width: 75,
    height: 108,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  content: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.text,
  },
  author: {
    fontSize: 13,
    color: colors.textSecondary || "#888",
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary || "#007AFF",
    marginTop: 7,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 8,
  },
  quantityButton: {
    padding: 5,
  },
  quantity: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    minWidth: 22,
    textAlign: "center",
  },
  removeButton: {
    padding: 6,
  },
});
