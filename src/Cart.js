import React, { useState } from 'react';
import { container, ACTIONS } from './store';

function Cart() {

    const [books, setBooks] = useState([]);
    container.subscribe(() => {
        setBooks(Object.assign([], container.getState().books));
        console.log('cart updated', container.getState())
    })

    const removeFromCart = (b) => container.dispatch(ACTIONS.REMOVE, {
        bookid: b
    });
   
    return (
        <><h2>My cart</h2>
        <fieldset>
            <legend>My cart</legend>
            <h3>Items in cart</h3>
            <ul>
                {books.map(b => <li>{b} - <button onClick={() => removeFromCart(b)}>Remove</button></li>)}
            </ul>
        </fieldset>
      </>
    );
}

export default Cart;
