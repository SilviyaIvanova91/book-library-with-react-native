import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { colors } from "../theme";

import GenreTags from "./GenreTag";

export default function BookDetails({ book, onBack }) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.topBar}>
        <Pressable style={styles.backButton} onPress={onBack}>
          <Text style={styles.backText}>Back</Text>
        </Pressable>
      </View>

      <Image source={{ uri: book.coverUrl }} style={styles.cover} />

      <View style={styles.infoBox}>
        <Text style={styles.title}>{book.title}</Text>

        <View style={[styles.row, styles.rowDivider]}>
          <Text style={styles.author}>{book.author}</Text>
        </View>

        <View style={[styles.row, styles.rowDivider]}>
          <Text style={styles.meta}>Published: {book.year}</Text>
        </View>

        <View style={[styles.row, styles.rowDivider]}>
          <Text style={styles.meta}>{book.pageCount} pages</Text>
        </View>

        <View style={[styles.row, styles.rowDivider]}>
          <GenreTags genre={book.genre} />
        </View>
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
    backgroundColor: colors.card,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  backText: {
    color: colors.text,
    fontSize: 15,
  },
  cover: {
    width: 220,
    height: 330,
    borderRadius: 12,
    marginBottom: 24,
    resizeMode: "cover",
  },
  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 34,
  },
  author: {
    color: colors.accent,
    fontSize: 17,
    fontWeight: "600",
    marginTop: 10,
    textAlign: "center",
  },
  meta: {
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 8,
  },
  genres: {
    marginTop: 16,
    marginBottom: 38,
    alignSelf: "stretch",
  },
  infoBox: {
    alignSelf: "stretch",
    backgroundColor: colors.card,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingBottom: 15,
    paddingTop: 10,
  },
});
