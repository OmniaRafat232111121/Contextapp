import React,{useState} from 'react'
import Counter from './components/Counter'
import Parent from './components/Parent'
import { CounterCotextProvider } from './context/CounterContext'
import { NameContext } from './context/NameContext'
const App = () => {
  return (
    <>
      <h1>ContextApi</h1>
      <CounterCotextProvider>
        <Counter />
        <NameContextP
        
      </CounterCotextProvider>
    </>
  )
}

export default App
