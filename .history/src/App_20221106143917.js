import React,{useState} from 'react'
import Parent from './components/Parent'
import { CounterCotextProvider } from './context/CounterContext'
const App = () => {
  return (
    <>
      <h1>ContextApi</h1>
      <CounterCotextProvider>
        
      </CounterCotextProvider>
    </>
  )
}

export default App
