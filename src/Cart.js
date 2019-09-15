import React, { useState} from 'react';
import { container } from './store';
function Cart() {
    const [books, setBooks] = useState([]);
    container.subscribe(() => {
        const currentCart = container.getState();
        setBooks(currentCart.books);
    })
    return (
        <>
            <h2>My cart</h2>
            <ul>
                {JSON.stringify(books)}
            </ul>
        </>
    );
}

export default Cart;
