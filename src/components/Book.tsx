// File: src/components/Book.tsx

import React from 'react';

interface BookProps {
  book: {
    book_author: string[];
    book_title: string;
    book_publication_city: string;
    book_publication_country: string;
    book_publication_year: string;
    book_pages: number;
    id: number;
  };
}

const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <div>
      <h2>{book.book_title}</h2>
      <p className="author">Author(s): {book.book_author.join(', ')}</p>
      <p>Publication City: {book.book_publication_city}</p>
      <p>Publication Country: {book.book_publication_country}</p>
      <p>Publication Year: {book.book_publication_year}</p>
      <p>Pages: {book.book_pages}</p>
    </div>
  );
}

export default Book;
