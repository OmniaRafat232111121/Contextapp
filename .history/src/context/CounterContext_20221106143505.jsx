import React, { createContext, useState } from 'react' 
export const CounterContext = createContext(null);
export const CounterCotextProvider = (props) => {
    const [counter,setCounter]=useState
    return (
        <CounterContext.Provider>
        </CounterContext.Provider>
    );
}