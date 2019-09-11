import React, { useState } from 'react';
import './App.css';
import BookList from "./BookList";
import Form from "./Form";

function App() {
    const [num, setNum] = useState(5);

    const changeNumEvent = (num) => {
        setNum(num);
    }
    return (
        <main className='app'>
            <h1>My book store</h1>
            <Form changeNum={changeNumEvent} num={num} />
            <BookList num={num} />
        </main>
    );
}

export default App;
