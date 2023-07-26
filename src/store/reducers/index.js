// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import bookReducer from './bookReducer';
import userReducer from './userReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
  // The names here are the keys this state will have.
  books: bookReducer,
  user: userReducer,
  // Other reducers
});

export default rootReducer;
