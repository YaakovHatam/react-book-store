import React from 'react';
import { container, ACTIONS } from './store';

function Book(props) {
    const imagesBaseUrl = 'https://kob-e.github.io/react-book-store/books-data/';

    const addBook = () => {
        container.dispatch({
            type: ACTIONS.ADD, 
            book: props
        })
    }

    return (
        <section>
            <h2>title: {props.title}</h2>
            <div>author: {props.author} </div>
            <strong>price: {props.price} </strong>
            <div><img src={imagesBaseUrl + props.imageLink} /></div>
            <button onClick={addBook}>Add</button>
        </section>
    )
}

export default Book;

