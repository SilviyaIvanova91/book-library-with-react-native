import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { colors } from "../theme";
import { books } from "../../books.json";
import BookCard from "./BookCard";

export default function BookList() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Каталог Книги</Text>
        <Text style={styles.subtitle}>{books.length} книги</Text>
      </View>

      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 64,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },

  header: {
    marginBottom: 24,
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
    marginTop: 6,
    lineHeight: 22,
  },

  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: colors.card,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
  },

  tabs: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tabActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  tabText: {
    color: colors.text,
    fontSize: 14,
  },
  tabTextActive: {
    color: colors.background,
    fontWeight: "bold",
  },

  sortRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
  },
  sortLabel: {
    color: colors.textMuted,
    fontSize: 14,
    marginRight: 2,
  },
  sortOption: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sortOptionActive: {
    borderColor: colors.accent,
    backgroundColor: colors.card,
  },
  sortText: {
    color: colors.textMuted,
    fontSize: 13,
  },
  sortTextActive: {
    color: colors.accent,
    fontWeight: "bold",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 21,
    fontWeight: "bold",
  },
  bookCount: {
    color: colors.textMuted,
    fontSize: 13,
  },

  bookList: {
    gap: 16,
  },
  bookCard: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 14,
    overflow: "hidden",
  },

  coverContainer: {
    width: 100,
    height: 145,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: colors.background,
  },
  cover: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  bookInfo: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 4,
  },
  bookTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "bold",
    lineHeight: 23,
    marginBottom: 6,
  },
  bookAuthor: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  bookGenre: {
    color: colors.textMuted,
    fontSize: 13,
    marginBottom: 6,
  },
  bookYear: {
    color: colors.textMuted,
    fontSize: 13,
    marginBottom: 4,
  },
  bookPages: {
    color: colors.textMuted,
    fontSize: 13,
  },

  detailsButton: {
    alignSelf: "flex-start",
    marginTop: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: colors.accent,
  },
  detailsButtonText: {
    color: colors.background,
    fontSize: 13,
    fontWeight: "bold",
  },

  empty: {
    color: colors.textMuted,
    fontSize: 15,
    textAlign: "center",
    marginTop: 40,
    paddingHorizontal: 20,
    lineHeight: 23,
  },
});
