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
    const {setUserName}=useContext(AppContext)
    return 
    (
        <div>
            <button/>
        </div>
    )
}
export const GrandChild = () => {
    
}