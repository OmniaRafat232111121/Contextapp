import React from 'react'
import { NameContext } from '../context/NameContext'
import CompC from './CompC'

const CompB = () => {
  const name = useContext(NameContext);
  const {counter}=use
  return (
    <div>
          <h1>ComonentB</h1>
          
    </div>
  )
}

export default CompB
