import React from 'react'

const ChildB = () => {
    const {setuserName}=useCOntext(AppContext)
  return (
      <div>
          <h1>{userName}</h1>
    </div>
  )
}

export default ChildB
