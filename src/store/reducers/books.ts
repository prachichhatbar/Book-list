import { GET_BOOKS, SET_LOADING } from '../types';

const initialState = {
  books: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
