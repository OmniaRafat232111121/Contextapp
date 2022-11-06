import React from 'react'
import { CounterContext } from '../context/CounterContext'

const Counter = () => {
  return (
      <CounterContext.Consumer>
          <h3>Counter value is </h3>
      </CounterContext.Consumer>
  )
}

export default Counter
