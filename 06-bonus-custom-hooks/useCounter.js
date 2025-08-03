import { useState } from "react"

export const useCounter = (initalValue = 0) => {
  const [counter, setCounter] = useState(initalValue)

  const increment = (value = 1) => {
    setCounter(c => c+value)
  }

  const decrement = (value = 1) => {
    setCounter(c => c-value)
  }

  const reset = () => {
    setCounter(initalValue)
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}