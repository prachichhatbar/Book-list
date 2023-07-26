import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const addBooks = createAction('ADD_BOOKS');

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await fetch("http://nyx.vima.ekt.gr:3000/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        page: 1,
        itemsPerPage: 20,
        filters: []
      })
    });

    const data = await response.json();
    return data.books;
  }
);
