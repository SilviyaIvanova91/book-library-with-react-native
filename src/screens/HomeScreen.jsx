import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import { homeColors } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function HomeScreen({}) {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const { featuredBooks, isLoading } = useContext(BookContext);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  const searchBooksHandler = () => {
    if (!searchQuery.trim()) return;

    navigation.navigate("CatalogScreen", {
      searchQuery: searchQuery.trim(),
    });
  };

  const renderFeaturedBook = ({ item }) => (
    <Pressable
      style={styles.featuredCard}
      onPress={() =>
        navigation.navigate("BookDetails", {
          book: item,
        })
      }
    >
      <Image source={{ uri: item.coverUrl }} style={styles.featuredCover} />

      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookAuthor}>{item.author}</Text>
    </Pressable>
  );

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.eyebrow}>📚 WELCOME TO YOUR BOOK NOOK</Text>
        <Text style={styles.heading}>Find your next{"\n"}favourite</Text>
        <Text style={styles.tagline}>Stories worth getting lost in.</Text>

        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={18}
            color={homeColors.muted}
            style={styles.searchIcon}
          />

          <TextInput
            placeholder="Search books..."
            placeholderTextColor={homeColors.muted}
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
            onSubmitEditing={searchBooksHandler}
          />
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured books</Text>
          <Pressable onPress={() => navigation.navigate("Books")}>
            <Text style={styles.seeAll}>See all ›</Text>
          </Pressable>
        </View>

        <FlatList
          data={featuredBooks}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredList}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderFeaturedBook}
        />
      </View>

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: homeColors.background,
  },

  container: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  header: {
    backgroundColor: homeColors.primary,
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  eyebrow: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 24,
    paddingTop: 25,
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "800",
    marginBottom: 8,
  },
  tagline: {
    color: "#E9F7F4",
    fontSize: 16,
    marginBottom: 24,
  },
  searchBox: {
    height: 44,
    backgroundColor: homeColors.surface,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginHorizontal: -16,
  },

  searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    color: homeColors.text,
    fontSize: 13,
    paddingVertical: 0,
    height: "100%",
  },
  section: {
    paddingHorizontal: 18,
    marginTop: 25,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sectionTitle: {
    color: homeColors.text,
    fontSize: 23,
    fontWeight: "800",
    marginBottom: 14,
  },
  seeAll: {
    color: homeColors.primaryDark,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 14,
  },
  featuredList: {
    paddingRight: 18,
    paddingBottom: 5,
  },
  featuredCard: {
    width: 172,
    backgroundColor: homeColors.surface,
    borderRadius: 20,
    padding: 10,
    marginRight: 14,
    borderWidth: 1,
    borderColor: homeColors.border,
    elevation: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.07,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 3 },
  },
  featuredCover: {
    width: "100%",
    height: 190,
    borderRadius: 12,
    backgroundColor: "#E8E1D8",
    marginBottom: 10,
  },
  bookTitle: {
    color: homeColors.text,
    fontSize: 16,
    fontWeight: "800",
    minHeight: 40,
  },
  bookAuthor: {
    color: homeColors.muted,
    fontSize: 13,
    marginTop: 3,
  },
  price: {
    color: homeColors.primaryDark,
    fontSize: 18,
    fontWeight: "800",
    marginTop: 8,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },
  categoryCard: {
    width: "48.5%",
    minHeight: 112,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  categoryIcon: {
    color: homeColors.primaryDark,
    fontSize: 30,
    marginBottom: 8,
  },
  categoryTitle: {
    color: "#203B38",
    fontSize: 15,
    fontWeight: "800",
    textAlign: "center",
  },
  popularCard: {
    backgroundColor: homeColors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: homeColors.border,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.06,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 3 },
  },
  popularCover: {
    width: 88,
    height: 124,
    borderRadius: 11,
    backgroundColor: "#E8E1D8",
  },
  popularInfo: {
    flex: 1,
    paddingHorizontal: 12,
  },
  popularTitle: {
    color: homeColors.text,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "800",
  },
  rating: {
    color: "#E7A91C",
    fontSize: 13,
    marginTop: 8,
  },
  cartButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: homeColors.coral,
    alignItems: "center",
    justifyContent: "center",
  },
  cartIcon: {
    fontSize: 21,
  },
  pressed: {
    opacity: 0.82,
    transform: [{ scale: 0.98 }],
  },
  bottomSpace: {
    height: 24,
  },
});
