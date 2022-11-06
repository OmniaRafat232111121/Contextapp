import React,{useState} from 'react'
import Counter from './components/Counter'
import Parent from './components/Parent'
import { CounterCotextProvider } from './context/CounterContext'
const App = () => {
  return (
    <>
      <h1>ContextApi</h1>
      <CounterCotextProvider>
        <Counter />
        
        
      </CounterCotextProvider>
    </>
  )
}

export default App
