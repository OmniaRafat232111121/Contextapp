import React,{useContext} from 'react'
import AppContext from "./Parent"
const ChildA = () => {
    const {userName}=useContext(AppContext)
  return (
      <div>
          <h1>{userName}</h1>
          <Child
    </div>
  )
}

export default ChildA
