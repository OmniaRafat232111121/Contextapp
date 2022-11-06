import React from 'react'
import { CounterContext } from '../context/CounterContext'

const Counter = () => {
  return (
      <CounterContext.Consumer>
      {({counter,incre})}
      </CounterContext.Consumer>
  )
}

export default Counter
