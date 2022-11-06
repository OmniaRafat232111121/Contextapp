import React from 'react'

const ChildB = () => {
    const {userName}=useCOntext(AppContext)
  return (
      <div>
          <h1>{userName}</h1>
    </div>
  )
}

export default ChildB
