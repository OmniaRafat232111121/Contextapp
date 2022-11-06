import React,{useContext} from 'react'
import AppContext f
const ChildA = () => {
    const {userName}=useContext(AppContext)
  return (
      <div>
          <h1>{userName}</h1>
    </div>
  )
}

export default ChildA
