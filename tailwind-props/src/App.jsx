import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    name : "Bharth",
    age : 24
  }

  return (
    <>
      <h1 className='bg-green-400 text-black'>Tailwind text..</h1>
      <Card name = "Bharath" btnText = "click me"/>
     
    </>
  )
}

export default App
