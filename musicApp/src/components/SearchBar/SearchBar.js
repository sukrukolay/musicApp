import React from "react";
import { TextInput, View } from "react-native";
import styles from './SearchBar.style';
const SearchBar = (props) => {
    return (
        <TextInput style={styles.SearchBar}
            placeholder="Ara..."
            onChangeText={props.onSearch}
        />
    )
}

export default SearchBar;