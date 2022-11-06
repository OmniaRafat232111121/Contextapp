import React, { useContext } from 'react'
import AppContext from "./Parent/"
const ChildB = () => {
    const {setUserName}=useContext(AppContext)
  return (
      <div>
          <button onClick={ ()=>setUserName("Memetech")} />
    </div>
  )
}

export default ChildB
