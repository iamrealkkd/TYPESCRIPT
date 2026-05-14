import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <div>
          <h1>Get started</h1>
          <chaicafe 
          name = "Headphones"
          price = "8000"
          />
      </div>
      </>    
    
  )
}

export default App
