import React, { useState,createContext } from 'react' 
const AppContext = createContext()

export const Parent = () => {
    const [userName, setUserName] = useState('omnia')
    return (
        <AppContext.Provider value={{userName}}>
            <div>
                {userName}
            </div>
        </AppContext.Provider>
    )
}