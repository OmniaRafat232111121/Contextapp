import React,{useContext} from 'react'
import App
const ChildA = () => {
    const {userName}=useContext(AppContext)
  return (
      <div>
          <h1>{userName}</h1>
    </div>
  )
}

export default ChildA
