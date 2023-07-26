// File: src/components/SearchBar.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/booksSlice';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(fetchBooks(searchTerm));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search for books" 
                value={searchTerm} 
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
