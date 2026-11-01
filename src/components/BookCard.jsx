import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { colors } from "../theme";
import GenreTags from "./GenreTag";

export default function BookCard({
  title,
  year,
  author,
  genre,
  pageCount,
  coverUrl,
  onSelect,
}) {
  return (
    <Pressable style={styles.card} onPress={onSelect}>
      <Image source={{ uri: coverUrl }} style={styles.cover} />

      <View style={styles.info}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.author}>{author}</Text>

        <Text style={styles.meta}>
          {year}г. • {pageCount} страници{" "}
        </Text>
        {/* <Text style={styles.meta}>{pageCount} страници</Text> */}

        <GenreTags genre={genre} />
      </View>
    </Pressable>
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
});
