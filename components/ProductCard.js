// ProductCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductCard = ({ title, description, price }) => {
    return (
        <View style={styles.product}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>${price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    product: {
        padding: 16,
        marginBottom: 16,
        borderColor: "#808080",
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    description: {
        color: "#888",
    },
    price: {
        marginTop: 8,
        color: "#27ae60",
        fontWeight: "bold",
    },
});

export default ProductCard;
