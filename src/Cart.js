import React, { useState} from 'react';
import { container } from './store';

function Cart() {

    const [books, setBooks] = useState([]);
    container.subscribe(() => {
        const currentState = container.getState();
        setBooks(Object.assign([], currentState.books));
    });

    return (
        <><h2>My cart</h2>
        <ul>
        {books.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      </>
    );
}

export default Cart;
