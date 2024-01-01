import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { DeleteButton } from "./DeleteButton";

const ProductCard = ({ title, description, price, onDelete }) => {
  const renderRightActions = () => <DeleteButton onPress={onDelete} />;

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.product}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  product: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
  description: {
    color: "#888",
  },
  price: {
    color: "#27ae60",
    fontWeight: "bold",
  },
});

export default ProductCard;
