import React,{useState} from 'react'
import ChildA from './ChildA';

const Parent = () => {
    const [fName, setFName] = useState('firstName');
    const [lName,setLName]=useState('LastName')
  return (
    <div>
      <ChildA fName={fNa}/>
    </div>
  )
}

export default Parent
