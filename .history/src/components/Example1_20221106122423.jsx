import React, { useState } from 'react'

export const Parent = () => {
    const [userName,setUserName]=useState("omnia")
    return (
        <div>
            
        </div>
        
    );
}
export const Child = ({ setUserName }) => {
    return (
        <
        
    )
}
export const GrandChild = ({ setUserName }) => {
    return (
        <div>
        </div>
    )
}