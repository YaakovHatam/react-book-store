import React, { useState } from 'react';
import Book from './Book';

function BookList(props) {
    let [books, setBooks] = useState([]);

    if (books.length === 0) {
        fetch('https://kob-e.github.io/react-book-store/books-data/books.json').then(responseData => {
            responseData.json().then(booksData => {
                const filteredBooks = booksData.slice(0, props.num);
                for(let i=0; i < filteredBooks.length; i++) {
                    filteredBooks[i].price = Math.ceil(Math.random() * 100);
                }
                setBooks(filteredBooks);
            })
        })
    }

    return (
        <div>
            {books.map(b => <Book {...b} key={b.key} id={b.key} />)}
        </div>
    )
}

export default BookList;