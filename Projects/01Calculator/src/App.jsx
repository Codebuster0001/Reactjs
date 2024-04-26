import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="calculator bg-white shadow-md rounded-md p-4">
    <div className="output mb-4">
      <input type="text" className="w-full text-right border border-gray-300 rounded-md p-2 text-lg font-semibold outline-none" placeholder="0" disabled/>
    </div>
    <div className="grid grid-cols-4 gap-2">
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md">C</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >/</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >x</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >-</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md">7</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >8</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >9</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >+</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >4</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >5</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >6</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >.</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >1</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >2</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >3</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md">=</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md col-span-2" >0</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md" >(</button>
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md"> )</button>
    </div>
  </div>
    </>
  )
}

export default App
