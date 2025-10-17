import { useState } from 'react'
import './App.css'

function App() {
  
let [count, setCount] = useState(0)

function Add(){
  if(count >= 10){
    alert("Value cannot be greater than 10")
    return
  }
  setCount(count + 1)
  console.log(count);
}

function Decrease(){
  if(count <= 0){
    alert("Value cannot be less than 0")
    return
  }
  setCount(count - 1)
  console.log(count);
}

  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Current Value = {count}</h2>
      <button onClick={Add}>Add Value {count}</button>
      <br />
      <br />
      <button onClick={Decrease}>Decrease Value {count}</button>
    </>
  )
}

export default App
