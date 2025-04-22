import { useState } from 'react'


function App() {
  const [color, setColor]  =  useState("olive")

  return (
  <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-2 rounded-full'>

        <button className='outline-none px-5 py-1 rounded-full' style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
        <button className='outline-none px-5 py-1 rounded-full' style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
        <button className='outline-none px-5 py-1 rounded-full' style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
        <button className='outline-none px-5 py-1 rounded-full' style={{backgroundColor: "white"}} onClick={() => setColor("white")}>White</button>
        <button className='outline-none px-5 py-1 rounded-full' style={{backgroundColor: "grey"}} onClick={() => setColor("black")}>Black</button>
        <button className='outline-none px-5 py-1 rounded-full' style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>Pink</button>

      </div>

    </div>

  </div>
  )
}

export default App
