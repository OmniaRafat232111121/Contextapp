import Reactfrom 'react'

const ChildB = () => {
    const {setUserName}=useCOntext(AppContext)
  return (
      <div>
          <button onClick={ ()=>setUserName("Memetech")} />
    </div>
  )
}

export default ChildB
