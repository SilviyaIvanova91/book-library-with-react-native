import { View, Text, StyleSheet, Pressable } from "react-native";

import { colors } from "../theme";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function CategoryComponent({ category }) {
  const { selectedCategory, setSelectedCategory } = useContext(BookContext);
  const categories = (category || "")
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);

  const pressHandler = (name) => {
    setSelectedCategory(name === selectedCategory ? null : name);
  };

  return (
    <View style={styles.row}>
      {categories.map((name, index) => (
        <Pressable
          key={index}
          style={[styles.tag, selectedCategory === name && styles.tagActive]}
          onPress={() => pressHandler(name)}
        >
          <Text
            style={[
              styles.text,
              selectedCategory === name && styles.textActive,
            ]}
          >
            {name}
          </Text>
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
