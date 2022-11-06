import React, { createContext, useState } from 'react' 
export const CounterContext = createContext(null);
CounterContext
export const CounterCotextProvider = (props) => {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => setCounter(counter + 1);
    const decreaseCounter = () => setCounter(counter - 1);
    const value={counter,increaseCounter,decreaseCounter}
    return (
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    );
}
