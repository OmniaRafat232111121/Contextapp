import React,{useState} from 'react'
import ChildA from './ChildA';

const Parent = () => {
    const [fName, setFName] = useState('Omni');
    const [lName,setLName]=useState('LastName')
  return (
    <div>
          <ChildA fName={fName} lName={lName} />
    </div>
  )
}

export default Parent
