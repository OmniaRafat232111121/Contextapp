import React,{useState} from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';
import ChildC from './ChildC';

const Parent = () => {
    const [fName, setFName] = useState('Omnia');
    const [lName,setLName]=useState('Rafat')
  return (
    <div>
          <ChildA fName={fName} lName={lName} />
          <ChildB  name={/>
          <ChildC/>
      </div>
  )
}

export default Parent
