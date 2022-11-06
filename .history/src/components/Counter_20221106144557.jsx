import React from 'react'
import { CounterContext } from '../context/CounterContext'

const Counter = () => {
  return (
      <CounterContext.Consumer>
      {({counter,increaseCOunter,decreaseCO})}
      </CounterContext.Consumer>
  )
}

export default Counter
