import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  // let counter = 5

  function addValue(){
    // counter = counter + 1
    // console.log(counter)
    if(counter == 20){
      alert("Reached higher limit")
    }else{
    setCounter(counter + 1)
    }
  }
  function removeValue(){
    // counter = counter - 1
    // console.log(counter)
    if(counter > 0){
      setCounter(counter - 1)
    }else{
      alert("Reached lower limit")
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
