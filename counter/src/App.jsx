import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 15
  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    if(counter < 20){
      setCounter(counter => counter  + 1)
      setCounter(counter => counter + 1)
    }else{
      return
    }     
  }

  function decreaseValue() {
    if (counter <= 0){
      return
    }
    else{
      setCounter(counter-1)
    }
  }

  function clear(){
    setCounter(counter - counter)
  }

  return (
    <>
      <h1>This is counter Project....!</h1>
      <h2>Counter Value : {counter}</h2>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quaerat veniam tempore ab obcaecati. 
        Minima facere officiis quos dignissimos aliquam accusamus animi, blanditiis inventore veniam. 
        Temporibus accusamus itaque minima aspernatur.
        {counter}
      </p>

      <button onClick={addValue}>Add value</button> <br /><br />
      <button onClick={decreaseValue}>Decrese Value</button>
      <button onClick={clear}>clear Value</button>
    </>
  )
}

export default App
