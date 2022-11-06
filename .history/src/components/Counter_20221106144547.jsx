import React from 'react'
import { CounterContext } from '../context/CounterContext'

const Counter = () => {
  return (
      <CounterContext.Consumer>
      {({counter,i})}
      </CounterContext.Consumer>
  )
}

export default Counter
