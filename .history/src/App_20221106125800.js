import React from 'react'
import CompA from './components/CompA'
import CompB from './components/CompB'

const App = () => {
  const [name,setName]=useState("Algorthim Academy")
  return (
    <div>
      <CompA  name={name/>
      <CompB/>
    </div>
  )
}

export default App
