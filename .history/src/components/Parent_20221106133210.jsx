import React,{useState,createContext,useContext} from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';
import ChildC from './ChildC';
const AppContext=createContext(null)
const Parent = () => {
const [userName,setuserName]=useState("OmniaRafat")
  return (
      <AppContext.Provider value={{userN}}>
          <ChildA />
          <ChildB/>
      </AppContext.Provider>
  )
}

export default Parent