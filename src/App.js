// App.js
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import { setBooks } from './store/reducers/bookReducer';

import BookList from './components/BookList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://nyx.vima.ekt.gr:3000/api/books', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page: 1,
        itemsPerPage: 20,
        filters: []
      }),
    })
    .then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div className="App">
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
