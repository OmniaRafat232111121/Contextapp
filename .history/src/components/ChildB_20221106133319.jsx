import React from 'react'

const Child = () => {
    const {userName}=useCOntext(AppContext)
  return (
      <div>
          <h1>{userName}</h1>
    </div>
  )
}

export default ChildA
