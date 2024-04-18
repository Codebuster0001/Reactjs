import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(1)

  const addValue = () => {
    setCount(count + 1);
  }

  const removeValue = () => {
    setCount (count - 1);
  }
  return (
    <>
      <h1>useState</h1>
      <h2>Counter :{count}</h2>
      <button  onClick={addValue}>Add value</button>
      <br />
      <br/>
      <button  onClick={removeValue}>Remove value</button>
      
    </>
  )
}

export default App
