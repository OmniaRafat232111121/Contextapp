import React,{useState} from 'react'
import ChildA from './ChildA';

const Parent = () => {
    const [fName, setFName] = useState('Omnia');
    const [lName,setLName]=useState('Rafat')
  return (
    <div>
          <ChildA fName={fName} lName={lName} />
    
      </div>
  )
}

export default Parent
