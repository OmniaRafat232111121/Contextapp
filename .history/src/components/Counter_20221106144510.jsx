import React from 'react'
import { CounterContext } from '../context/CounterContext'

const Counter = () => {
  return (
      <CounterContext.Consumer>
          <h3>Counter </h3>
      </CounterContext.Consumer>
  )
}

export default Counter
