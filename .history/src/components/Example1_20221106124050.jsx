import React, { useState,createContext, useContext } from 'react' 
const AppContext = createContext()

export const Parent = () => {
    const [userName, setUserName] = useState('omnia')
    return (
        <AppContext.Provider value={{userName,setUserName}}>
            <div>
                {userName}
                
            </div>
        </AppContext.Provider>
    )
}
export const Child = () => {
   <GrandChild/>
}
export const GrandChild = () => {
     const {setUserName}=useContext(AppContext)
    return (
        <div>
            <button onClick={ ()=>setUserName('meme')} />
        </div>
    )
    
}