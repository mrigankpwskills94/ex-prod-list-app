import { StyleSheet, View } from "react-native";

export const ProductSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
  },
});
