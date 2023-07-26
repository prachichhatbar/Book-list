// src/components/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/reducers';
import BookList from './BookList';
import SearchBar from './SearchBar';

function App() {
  return (
    <Provider store={store}>
      <SearchBar />
      <BookList />
    </Provider>
  );
}

export default App;
