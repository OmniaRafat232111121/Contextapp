import React, { useState } from 'react'

export default const Parent = () => {
    const [userName,setUserName]=useState("omnia")
    return (
        <div>
            {userName}
            <Child setUserName={setUserName}/>
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
            <button onClick={()=>setUserName("Meme")} />
        </div>
    )
}