import React, {useState} from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const handleClear = () => {
    setResult("")
  }

  const handleBackspace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error")
    }
  }

  return (
    <>
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>

      <div className="keypad">
        <button onClick={handleClear} className="highlight" id="button-clear">AC</button>
        <button onClick={handleBackspace} className="highlight" id="button-backspace">CE</button>
        <button onClick={handleClick} className="highlight" name="/">/</button>
        <button onClick={handleClick} className="highlight" name="*">*</button>
        <button onClick={handleClick} className="button" name="7">7</button>
        <button onClick={handleClick} className="button" name="8">8</button>
        <button onClick={handleClick} className="button" name="9">9</button>
        <button onClick={handleClick} className="highlight" name="-">-</button>
        <button onClick={handleClick} className="button" name="4">4</button>
        <button onClick={handleClick} className="button" name="5">5</button>
        <button onClick={handleClick} className="button" name="6">6</button>
        <button onClick={handleClick} className="highlight" name="+">+</button>
        <button onClick={handleClick} className="button" name="1">1</button>
        <button onClick={handleClick} className="button" name="2">2</button>
        <button onClick={handleClick} className="button" name="3">3</button>
        <button onClick={calculate} className="highlight" name="=" id="button-result">=</button>
        <button onClick={handleClick} className="button" name="0" id="button-0">0</button>
        <button onClick={handleClick} className="button" name=".">.</button>
      </div>
    </div>
  </>
  )
}

export default App