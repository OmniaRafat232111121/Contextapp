import React from 'react'
import CompC from './CompC'

const CompB = ({name}) => {
  return (
    <div>
          <h1>ComonentB</h1>
          <CompC name={name} />
    </div>
  )
}

export default CompB
