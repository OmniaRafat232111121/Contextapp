import React,{useState} from 'react'
import CompA from './components/CompA'
import Counter from './components/Counter'
import Parent from './components/Parent'
import { CounterCotextProvider } from './context/CounterContext'
import { NameContext, NameContextProvider } from './context/NameContext'
const App = () => {
  return (
    <>
      <h1>ContextApi</h1>
      <CounterCotextProvider>
        <Counter />
        <NameContextProvider>
       <CompA/>
        </NameContextProvider>
      </CounterCotextProvider>
    </>
  )
}

export default App
