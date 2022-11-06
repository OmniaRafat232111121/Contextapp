import Reactfrom 'react'

const ChildB = () => {
    const {setUserName}=useCntext(AppContext)
  return (
      <div>
          <button onClick={ ()=>setUserName("Memetech")} />
    </div>
  )
}

export default ChildB
