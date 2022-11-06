import React from 'react'

const ChildB = () => {
    const {setUserName}=useCOntext(AppContext)
  return (
      <div>
          <button onClick={ ()=>setUserName("Meme")} />
    </div>
  )
}

export default ChildB
