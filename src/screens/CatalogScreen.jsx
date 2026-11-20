import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { colors } from "../theme";
import BookCard from "../components/BookCard";

import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function CatalogScreen({ navigation }) {
  const { books, selectedCategory, setSelectedCategory } =
    useContext(BookContext);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.eyebrow}>YOUR READING SPACE ✨</Text>
        <Text style={styles.title}>Каталог</Text>
        <Text style={styles.subtitle}>
          Намери следващото си любимо приключение.
        </Text>
      </View>

      {selectedCategory && (
        <View style={styles.categoryFilter}>
          <Text style={styles.categoryFilterLabel}>Филтриран по жанр:</Text>
          <Pressable
            style={styles.categoryChip}
            onPress={() => setSelectedCategory(null)}
          >
            <Text style={styles.categoryChipText}>{selectedCategory} X</Text>
          </Pressable>
        </View>
      )}

      {books.map((book) => (
        <BookCard
          key={book.id}
          {...book}
          onSelect={() => {
            navigation.navigate();
          }}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 10,
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 30,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 24,
  },

  eyebrow: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 10,
  },

  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "800",
    letterSpacing: -0.8,
  },

  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
    marginTop: 8,
    lineHeight: 22,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 28,
    height: 54,
  },

  searchIcon: {
    color: colors.accent,
    fontSize: 27,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    color: colors.text,
    fontSize: 14,
  },

  clearSearch: {
    color: colors.textMuted,
    fontSize: 17,
    padding: 5,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800",
  },

  categoryFilter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginBottom: 22,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
  },

  filterInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },

  filterIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },

  filterIconText: {
    color: colors.accent,
    fontSize: 22,
    fontWeight: "bold",
  },

  categoryFilterLabel: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.4,
    marginBottom: 3,
  },

  filterDescription: {
    color: colors.textMuted,
    fontSize: 12,
  },

  categoryChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: colors.accent + "20",
    borderWidth: 1,
    borderColor: colors.accent + "55",
    borderRadius: 20,
    paddingLeft: 12,
    paddingRight: 5,
    paddingVertical: 5,
  },

  categoryChipText: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "800",
  },

  clearFilterButton: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },

  clearFilterText: {
    color: colors.background,
    fontSize: 19,
    fontWeight: "bold",
    lineHeight: 22,
  },

  categoryFilter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginBottom: 22,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
  },

  filterInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },

  filterIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },

  filterIconText: {
    color: colors.accent,
    fontSize: 22,
    fontWeight: "bold",
  },

  categoryFilterLabel: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.4,
    marginBottom: 3,
  },

  filterDescription: {
    color: colors.textMuted,
    fontSize: 12,
  },

  categoryChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: colors.accent + "20",
    borderWidth: 1,
    borderColor: colors.accent + "55",
    borderRadius: 20,
    paddingLeft: 12,
    paddingRight: 5,
    paddingVertical: 5,
  },

  categoryChipText: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "800",
    marginHorizontal: 10,
  },

  clearFilterButton: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },

  clearFilterText: {
    color: colors.background,
    fontSize: 19,
    fontWeight: "bold",
    lineHeight: 22,
  },

  sortHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  bookCount: {
    color: colors.textMuted,
    fontSize: 13,
  },

  sortContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },

  sortChip: {
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  sortChipActive: {
    backgroundColor: colors.card,
    borderColor: colors.accent,
  },

  sortText: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },

  sortTextActive: {
    color: colors.accent,
    fontWeight: "800",
  },

  bookList: {
    gap: 16,
  },

  emptyContainer: {
    alignItems: "center",
    paddingVertical: 55,
  },

  emptyIcon: {
    fontSize: 45,
    marginBottom: 15,
  },

  emptyTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800",
  },

  emptyText: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: "center",
    marginTop: 9,
    lineHeight: 21,
  },

  resetButton: {
    backgroundColor: colors.accent,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 20,
  },

  resetButtonText: {
    color: colors.background,
    fontWeight: "800",
  },
});
