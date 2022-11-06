import React from 'react'

const ChildB = () => {
    const {setUserName}=useCOntext(AppContext)
  return (
      <div>
          <button onClick={ ()=>set} />
    </div>
  )
}

export default ChildB
