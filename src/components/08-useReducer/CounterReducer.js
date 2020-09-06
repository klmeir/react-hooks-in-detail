import React, { useReducer } from 'react';

import './styles.css';

const initialState = { count: 0 };

function reducer(state = initialState, action) {  
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };            
        case 'decrement':
            return { count: state.count - 1 };            
        default:
            throw new Error();
    }
}

export const TodoApp = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <h2>Counter: {state.count }</h2>
            <button onClick={ () => dispatch({ type: 'increment'}) }>+1</button>
            <button onClick={ () => dispatch({ type: 'decrement'}) }>-1</button>
        </div>
    )
}
