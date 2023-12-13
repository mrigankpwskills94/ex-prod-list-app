// SearchBar.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search Products"
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
            />
            <Button title="Search" onPress={handleSearch} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 16,
    },
    input: {
        flex: 1,
        marginRight: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
});

export default SearchBar;
