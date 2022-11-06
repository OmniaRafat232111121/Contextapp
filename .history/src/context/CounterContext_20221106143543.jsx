import React, { createContext, useState } from 'react' 
export const CounterContext = createContext(null);
export const CounterCotextProvider = (props) => {
    const [counter, setCounter] = useState(0);
    const increaseCounter=()=>set
    return (
        <CounterContext.Provider value={value}>
            
        </CounterContext.Provider>
    );
}