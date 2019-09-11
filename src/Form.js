import React, { useState } from 'react';

function Form(props) {
    const [num, setNum] = useState(props.num);

    const onNumChange = () => props.changeNum(num);

    return (
        <div>
            <input onChange={(e) => { setNum(e.target.value) }} value={num}></input>
            <button onClick={onNumChange}>Set num</button>
        </div>
    )
}

export default Form;
