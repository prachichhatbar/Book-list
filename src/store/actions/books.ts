import axios from 'axios';
import { GET_BOOKS, SET_LOADING } from '../types';

export const getBooks = (page: number = 1, itemsPerPage: number = 20, filters: any[] = []) => async dispatch => {
  dispatch({ type: SET_LOADING, payload: true });
  const res = await axios.post('http://nyx.vima.ekt.gr:3000/api/books', { page, itemsPerPage, filters });
  dispatch({ type: GET_BOOKS, payload: res.data });
  dispatch({ type: SET_LOADING, payload: false });
};
