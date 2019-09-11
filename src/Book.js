import React from 'react';

function Book(props) {
    const imagesBaseUrl = 'https://kob-e.github.io/react-book-store/books-data/';

    return (
        <section>
            <h2>title: {props.title}</h2>
            <div>author: {props.author} </div>
            <div><img src={imagesBaseUrl + props.imageLink} /></div>
        </section>
    )
}

export default Book;

