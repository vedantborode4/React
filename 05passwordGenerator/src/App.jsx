import { useState, useCallback, useEffect, useRef } from 'react'

function App (){

  const [length, setLength] = useState(8)
  const [numsAllowed, setNumsAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
 
  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numsAllowed){
      str += "1234567890"
    }
    if(charAllowed){
      str += "~!@#$%^&*_-`?/.,=+"
    }
    let pass = ""
  
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, charAllowed, numsAllowed,setPassword])

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numsAllowed, charAllowed, passwordGenerator])

  return(
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" 
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} 
          />
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClip}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>            
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numsAllowed}
              id="numberInput"
              onChange={()=>{
                setNumsAllowed((prev)=>(!prev))
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>            
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={()=>{
                setCharAllowed((prev)=>(!prev))
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