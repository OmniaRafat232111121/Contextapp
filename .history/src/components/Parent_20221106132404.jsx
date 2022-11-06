import React,{useState} from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';

const Parent = () => {
    const [fName, setFName] = useState('Omnia');
    const [lName,setLName]=useState('Rafat')
  return (
    <div>
          <ChildA fName={fName} lName={lName} />
          <ChildB />
          
      </div>
  )
}

export default Parent
