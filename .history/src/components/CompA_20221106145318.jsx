import React from 'react'
import { NameContext } from '../context/NameContext'
import CompB from './CompB'

const CompA = () => {
  return (
    <NameContext.Consumer>
      {()}
    </NameContext.Consumer>
  )
}

export default CompA
