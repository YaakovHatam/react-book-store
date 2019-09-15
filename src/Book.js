import React from 'react';
import { container, ACTIONS } from './store';

function Book(props) {
    const imagesBaseUrl = 'https://kob-e.github.io/react-book-store/books-data/';

    const addBookToCart = () => {
        container.dispatch(ACTIONS.ADD, {
            id: props.id
        });
    }

    return (
        <section>
            <h2>title: {props.title}</h2>
            <div>author: {props.author} </div>
            <div><img src={imagesBaseUrl + props.imageLink} /></div>
            <button onClick={addBookToCart}>Add</button>
        </section>
    )
}

export default Book;

