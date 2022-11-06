import React from 'react'
import { CounterContext } from '../context/CounterContext'

const Counter = () => {
  return (
      <CounterContext.Consumer>
          {({ counter, increaseCOunter, decreaseCOunter }) => {
              return (
                   <div>
            <h3>Counter value is {counter}</h3>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
          </div>
              )
      }}
      </CounterContext.Consumer>
  )
}

export default Counter
