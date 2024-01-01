import React from "react";
import { StyleSheet, TextInput } from "react-native";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search Products"
      value={searchTerm}
      onChangeText={(text) => setSearchTerm(text)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default SearchBar;
