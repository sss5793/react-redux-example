import React from 'react';
import '../App.css';

function App() {
    return (
        <div className="App">
            <h1>React Redux Example - Counter</h1>
            <div className={'box'}>
                <h2>0</h2>
                <div>
                    <button className={'btn'}>+</button>
                    <button className={'btn'}>-</button>
                </div>
            </div>
        </div>
    );
}

export default App;
