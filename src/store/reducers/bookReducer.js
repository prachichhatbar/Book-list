// in src/reducers/bookReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '../actions/bookActions';

const bookSlice = createSlice({
  name: 'books',
  initialState: { books: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
