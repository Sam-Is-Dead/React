import { useCallback,useState,useRef,useEffect} from "react"


function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [symbols, setSymbols] = useState(false)
  const [numbers, setNumbers] = useState(false)
 
  const passwordRef = useRef(null)
  const generatePassword = useCallback(() => {
    let charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (symbols) {
      charList += "!@#$%^&*()_+~`|}{[]:;?><,./-="
    }
    if (numbers) {
      charList += "0123456789"
    }

    let passwordResult = ""
    const charListLength = charList.length

    for (let i = 0; i < length; i++) {
      const characterIndex = Math.floor(Math.random() * (charListLength))
      passwordResult += charList.charAt(characterIndex)
    }
    setPassword(passwordResult)
  }, [length, symbols, numbers, setPassword])

  useEffect(() => {
    generatePassword()
  }, [length, symbols, numbers,generatePassword])
  
  const CopyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }, [password])  
  
  return (
   <> 
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-700 text-orange-400">
      <h1 className="text-4xl text-white text-center">PassWord Generator</h1>
      <div className="my-4 p-3 bg-gray-800 rounded">
        <p className="text-2xl break-all">{password}</p>
      </div>
      <div className="my-4">
        <label className="block mb-2">Password Length: {length}</label>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full"
          ref={passwordRef}
        />
      </div>
      <div className="my-4">
        <label className="mr-2">
          <input
            type="checkbox"
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
            className="mr-2"
          />
          Include Symbols
        </label>
        <button
        onClick={CopyPassword}
        className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
        >Copy</button>
      </div>
      <div className="my-4">
        <label className="mr-2">
          <input
            type="checkbox"
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
            className="mr-2"
          />
          Include Numbers
        </label>
      </div>
      <button
        onClick={generatePassword}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded"
      >
        Generate Password
      </button> 
    </div>
   </>
  )
}

export default App