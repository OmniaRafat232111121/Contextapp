import React from 'react'
import CompA from './components/CompA'
import CompB from './components/CompB'

const App = () => {
  const [name,setName]=useState("Algorthim ")
  return (
    <div>
      <CompA />
      <CompB/>
    </div>
  )
}

export default App
