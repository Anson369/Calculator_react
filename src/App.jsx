import { useRef } from 'react'
import './App.css'

function App() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  function getN1() {
    return parseInt(ref1.current.value)
  }
  function getN2() {
    return parseInt(ref2.current.value)
  }
  function add() {
    ref3.current.value = getN1() + getN2()
  }
  function subtract() {
    ref3.current.value = getN1() - getN2()
  }
  function multiply() {
    ref3.current.value = getN1() * getN2()
  }
  function divide() {
    ref3.current.value = getN1() / getN2()
  }
  return (
    <>
      <h1>Calculator</h1>
      <input type='number' placeholder='Number 1' ref={ref1}></input>
      <input type='number' placeholder='Number 1' ref={ref2}></input>
      <div>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div>
      <input type='number' placeholder='Answer' ref={ref3}></input>
    </>
  )
}

export default App
