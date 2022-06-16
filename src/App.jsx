import { useState } from 'react'
import CircleProgress from "./components/progress"
import './App.css'

function App() {
  const [progress, setProgress] = useState(50)

//   setInterval(() => {
//     setProgress(() => Math.floor(Math.random()*100+1))
// }, 1500);

  return (
    <div className="App">
        <CircleProgress progress={progress} color={'#fdd835'}  />
    </div>
  )
}

export default App
