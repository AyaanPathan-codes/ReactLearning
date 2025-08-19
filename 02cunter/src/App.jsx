import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter ] = useState(15);

  // let counter  = 1; 

  const addValue = () => {

   if (counter <   20) {
    setCounter(counter + 1);
    console.log("clicked ", Math.random());
  }
    return 

  }
 const removeValue = () => {

  if (counter > 0) {
    setCounter(counter - 1);
    console.log("clicked ", Math.random());
  }
    return 

  }
  
  return (
    <>
      <h1>Chai aur react</h1>

      <h2>Counter Vaue : {counter}</h2>
      <button onClick={addValue}>Add value : {counter}</button>
      <button onClick={removeValue}>Remove value : {counter}</button>

    </>
  )
}

export default App
