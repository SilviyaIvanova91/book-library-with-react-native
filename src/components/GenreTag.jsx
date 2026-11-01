import { View, Text, StyleSheet, Pressable } from "react-native";

import { colors } from "../theme";

export default function GenreTags({ genre }) {
  const genres = genre.split(",").map((g) => g.trim());

  return (
    <View style={styles.row}>
      {genres.map((name, index) => (
        <Pressable style={styles.text} key={index}>
          <View style={styles.tag}>
            <Text style={styles.text}>{name}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  tagActive: {
    borderColor: colors.accent,
    backgroundColor: colors.accent,
  },
  text: {
    color: colors.textMuted,
    fontSize: 12,
  },
  textActive: {
    color: colors.background,
    fontWeight: "bold",
  },
});
