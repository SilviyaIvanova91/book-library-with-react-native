import { StyleSheet, Text, View } from "react-native";
import { colors } from "./theme";
import BookList from "./components/BookList";

export default function App() {
  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <BookList />
    </View>
  );
}
