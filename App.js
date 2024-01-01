import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import ProductList from "./components/ProductList";

const initialProducts = [
  {
    id: 1,
    title: "Earphones",
    description: "Great quality earphones with noise cancellation",
    price: 19.99,
  },
  {
    id: 2,
    title: "Jeans",
    description: "Jeans with the perfect fit and comfort",
    price: 9.99,
  },
  {
    id: 3,
    title: "Laptop",
    description: "High end laptop, blazing fast",
    price: 99.99,
  },
  // Add more products as needed
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  return (
    <SafeAreaView>
      <ProductList products={products} onDelete={handleDelete} />
    </SafeAreaView>
  );
};

export default App;
