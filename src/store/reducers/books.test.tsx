// src/store/reducers/books.test.tsx
import booksReducer from './books';
import { GET_BOOKS } from '../types';

it('handles actions of type GET_BOOKS', () => {
  const action = {
    type: GET_BOOKS,
    payload: ['book 1', 'book 2']
  };

  const initialState = {books:[], loading: false}
  const newState = booksReducer(initialState, action);

  expect(newState).toEqual(['book 1', 'book 2']);
});
