import React from 'react'
import { NameContext } from '../context/NameContext'
import CompB from './CompB'

const CompA = () => {
  return (
    <NameContext.Consumer>
      {({count})}
    </NameContext.Consumer>
  )
}

export default CompA
