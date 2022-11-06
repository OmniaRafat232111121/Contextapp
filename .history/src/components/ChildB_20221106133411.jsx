import React from 'react'

const ChildB = () => {
    const {setUserName}=useCOntext(AppContext)
  return (
      <div>
          <button onClick={ ()=>setUserName("Memete")} />
    </div>
  )
}

export default ChildB
