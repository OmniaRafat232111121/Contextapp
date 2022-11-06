import React, { useState,createContext } from 'react' 
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
    return 
    (
        
    )
}
