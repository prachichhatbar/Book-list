// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'; // import your store
import { Provider } from 'react-redux'; // import the Provider component from react-redux

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
