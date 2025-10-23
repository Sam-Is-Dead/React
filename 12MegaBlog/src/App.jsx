import './App.css'

function App() {
console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(import.meta.env.DB_PASSWORD) // undefined

  return (
    <>
      <h1 className='text-4xl text-center py-10' >GOOD MORNING</h1>
    </>
  )
}

export default App
