// src/components/Book.test.tsx
import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';

it('renders book details', () => {
  const bookData = {
    book_author: ["Author Name"],
    book_title: "Book Title",
    book_publication_city: "City",
    book_publication_country: "Country",
    book_publication_year: "Year",
    book_pages: 200,
    id: 1
  };
  const wrapper = shallow(<Book book={bookData} />);
  expect(wrapper.find('.author').text()).toEqual('Author(s): ' + bookData.book_author.join(', '));
  // add more expectations for each detail you render ...
});
