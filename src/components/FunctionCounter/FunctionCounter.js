import React, { useState } from 'react';

function FunctionCounter() {
    const [number, setNumber] = useState(0);

    function addNumber() {
        setNumber(number + 1);
    }

    function substractNumber() {
        if (number === 0) {
            alert('ga bisa ngurangin lagi');
        } else {
            setNumber(number - 1);
        }
    }

    function resetNumber() {
        setNumber(0);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={addNumber}>Tambah</button>
            <button onClick={substractNumber}>Kurang</button>
            <button onClick={resetNumber}>Reset</button>
        </div>
    );
}

export default FunctionCounter;
