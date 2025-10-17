import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Card name="Chem" />
      <Card name="Physics" />
      <Card name="Maths" />
      <Card />
    </>
  )
}

export default App
