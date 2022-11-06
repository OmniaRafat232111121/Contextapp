import React from 'react'
import { CounterContext } from '../context/CounterContext'

const Counter = () => {
  return (
      <CounterContext.Consumer>
      {({counter,increaseCO})}
      </CounterContext.Consumer>
  )
}

export default Counter
