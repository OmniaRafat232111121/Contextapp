import React, { createContext, useState } from 'react'
export const NameContext = createContext();
NameContext.displayName = "Name"

export const NameContextProvider = (props) => {
  const [name, setName] = useState('Algorthim Academy');
  return (
    <NameContext.Provider value={s}>
      {props.children}
    </NameContext.Provider>
  )
  
}