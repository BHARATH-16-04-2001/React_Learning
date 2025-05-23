import { use, useEffect, useState, useCallback, useRef } from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook 
  const passwordRef = useRef()

  const copyPasswordToClipboard = useCallback(
    () => {
      window.navigator.clipboard.writeText(password)
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,3)
    },
    [password],
  )
  




  const passwordGernarator = useCallback(
    () => {
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      let pass = ""

      if (numberAllowed) {
        str += '0123456789'
      }

      if (charAllowed) {
        str += '!@#$%^&*()?/|\_+=:;~'
      }

      for (let index = 1; index <= length; index++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    },
    [length, numberAllowed, charAllowed, setPassword],
  )

  useEffect(() => {
    passwordGernarator()
  }, [length, numberAllowed, charAllowed, passwordGernarator])



  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='password'
            ref={passwordRef}
            readOnly
          />

          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0 active:opacity-20 cursor-pointer hover:bg-blue-600'
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
              
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
