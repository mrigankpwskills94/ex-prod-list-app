// ProductList.js
import React, { useState } from "react";
import { View } from "react-native";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

const ProductList = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (searchTerm) => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <View>
            <SearchBar onSearch={handleSearch} />
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </View>
    );
};

export default ProductList;
