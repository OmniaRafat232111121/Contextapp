import React,{use} from 'react'
import { CounterContext } from '../context/CounterContext';
import { NameContext } from '../context/NameContext'
import CompC from './CompC'

const CompB = () => {
  const name = useContext(NameContext);
  const {counter}=useContext(CounterContext)
  return (
    <div>
      <h1>ComonentB:-{counter} -{name}</h1>   
    </div>
  )
}

export default CompB
