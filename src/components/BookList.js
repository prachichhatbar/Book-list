// File: src/components/BookList.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../store/actions/bookActions';

const BookList = () => {
    const dispatch = useDispatch();
    const bookState = useSelector(state => state.books);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    const { books } = bookState;

    return (
        <div>
            <pre>
                {JSON.stringify(books, null, 2)}
            </pre>
        </div>
    );
};

export default BookList;
