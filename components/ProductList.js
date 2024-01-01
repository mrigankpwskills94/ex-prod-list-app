import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductCard from "./ProductCard";
import { ProductSeparator } from "./ProductSeparator";
import SearchBar from "./SearchBar";

const ProductList = ({ products, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.appContainer}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <ProductCard
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            onDelete={() => onDelete(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ProductSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    margin: 10,
  },
});

export default ProductList;
