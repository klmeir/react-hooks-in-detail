import React, { useState, useCallback, useEffect } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../03-examples/multiple.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback( ( num = 1) => {
        setCounter( c => c + num );
    }, [setCounter]);

useEffect(() => {
    console.log(' useEffect call ');
}, [increment])

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />

        </div>
    )
}
