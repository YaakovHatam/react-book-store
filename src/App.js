import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import BookList from './BookList';
import Cart from './Cart';  

function App() {
    const [num, setNum] = useState(5);

    const changeNumEvent = (num) => {
        setNum(num);
    }
    return (
        <main className='app'>
            <h1>My book store</h1>
            <Cart />
            <Form changeNum={changeNumEvent} num={num} />
            <BookList num={num} />
        </main>
    );
}

export default App;
