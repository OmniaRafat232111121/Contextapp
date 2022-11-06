import React from 'react'
import { CounterContext } from '../context/CounterContext'

const Counter = () => {
  return (
      <CounterContext.Consumer>
      {({counter})}
      </CounterContext.Consumer>
  )
}

export default Counter
