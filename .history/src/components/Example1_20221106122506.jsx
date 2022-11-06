import React, { useState } from 'react'

export const Parent = () => {
    const [userName,setUserName]=useState("omnia")
    return (
        <div>
            {userName}
            <C
        </div>
        
    );
}
export const Child = ({ setUserName }) => {
    return (
        <div>
            <GrandChild setUserName={setUserName}/>
        </div>
        
    )
}
export const GrandChild = ({ setUserName }) => {
    return (
        <div>
        </div>
    )
}