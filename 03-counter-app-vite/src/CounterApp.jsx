import { useState } from "react"

const CounterApp = ({ value = 0 }) => {
	const [counter, setCounter] = useState(value)

	const handleAdd = () => {
		// setCounter(counter+1)
		setCounter((c) => c + 1)
	}

	const handleSubstract = () => {
		setCounter((c) => c - 1)
	}

	const handleReset = () => {
		setCounter(value)
	}

	return (
		<>
			<h1>CounterApp</h1>
			<h2>{counter}</h2>
			<button onClick={handleAdd}>+1</button>
			<button onClick={handleSubstract}>-1</button>
			<button onClick={handleReset}>Reset</button>
		</>
	)
}

export default CounterApp
