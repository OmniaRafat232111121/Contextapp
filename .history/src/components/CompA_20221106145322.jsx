import React from 'react'
import { NameContext } from '../context/NameContext'
import CompB from './CompB'

const CompA = () => {
  return (
    <NameContext.Consumer>
      {({co})}
    </NameContext.Consumer>
  )
}

export default CompA
