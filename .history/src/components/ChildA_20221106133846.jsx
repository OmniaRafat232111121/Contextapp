import React,{useContext} from 'react'
import ChildB from './ChildB'
import AppContext from "./Parent"
const ChildA = () => {
    const {userName}=useContext('')
  return (
      <div>
          <h1>{userName}</h1>
          <ChildB/>
    </div>
  )
}

export default ChildA
