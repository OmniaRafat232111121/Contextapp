import Reactfrom 'react'

const ChildB = () => {
    const {setUserName}=useContext(AppContext)
  return (
      <div>
          <button onClick={ ()=>setUserName("Memetech")} />
    </div>
  )
}

export default ChildB
