import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { colors } from "../theme";
import BookCard from "../components/BookCard";
import { books } from "../data/books";

export default function CatalogScreen({ navigation }) {
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
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 28,
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

  genreScroll: {
    marginTop: 14,
    marginBottom: 28,
    marginHorizontal: -18,
  },

  genreContainer: {
    paddingHorizontal: 18,
    gap: 9,
  },

  genreChip: {
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },

  genreChipActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },

  genreText: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: "600",
  },

  genreTextActive: {
    color: colors.background,
    fontWeight: "800",
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
