import React from 'react';

import ClassCounter from './components/ClassCounter/ClassCounter';
import FunctionCounter from './components/FunctionCounter/FunctionCounter';

import './App.css';

function App() {
    return (
        <div className='App'>
            <ClassCounter />
            <FunctionCounter />
        </div>
    );
}

export default App;
