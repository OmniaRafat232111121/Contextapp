import React,{useContext} from 'react'

const ChildA = () => {
    const {userName}=useContext(Ap)
  return (
      <div>
          <h1>{userName}</h1>
    </div>
  )
}

export default ChildA
