// App.js
import React from "react";
import { SafeAreaView } from "react-native";
import ProductList from "./components/ProductList";

const App = () => {
    const products = [
        {
            id: 1,
            title: "Product 1",
            description: "Description for Product 1",
            price: 19.99,
        },
        {
            id: 2,
            title: "Product 2",
            description: "Description for Product 2",
            price: 29.99,
        },
        // Add more products as needed
    ];

    return (
        <SafeAreaView>
            <ProductList products={products} />
        </SafeAreaView>
    );
};

export default App;
