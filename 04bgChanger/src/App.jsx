import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=> setColor("purple")} className= "outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor: "purple"}}>click me</button>     
            <button onClick={()=> setColor("blue")} className= "outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor: "blue"}}>click me</button>     
            <button onClick={()=> setColor("red")} className= "outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor: "red"}}>click me</button>     
            <button onClick={()=> setColor("green")} className= "outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor: "green"}}>click me</button>     
            <button onClick={()=> setColor("yellow")} className= "outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor: "yellow"}}>click me</button>     
            <button onClick={()=> setColor("white")} className= "outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor: "white"}}>click me</button>     
            <button onClick={()=> setColor("orange")} className= "outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor: "orange"}}>click me</button>  
        </div>
      </div>
    </div>
  )
}

export default App