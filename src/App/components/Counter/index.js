import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../../modules/counter";

const Counter = () => {
    const number = useSelector(state => state.counter.number); // store state 가져오기
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>React Redux Example - Counter</h1>
            <div className={'box'}>
                <h2>{number}</h2>
                <div>
                    <button className={'btn'} onClick={() => dispatch(increment())}>+</button>
                    <button className={'btn'} onClick={() => dispatch(decrement())}>-</button>
                </div>
            </div>
        </div>
    )
};

export default Counter;
