import React,{useContext} from 'react'

const ChildA = () => {
    const {userName}=useContext(AppConte)
  return (
      <div>
          <h1>{userName}</h1>
    </div>
  )
}

export default ChildA
