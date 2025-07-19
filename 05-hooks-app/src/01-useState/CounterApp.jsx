import { useState } from "react"

const CounterApp = () => {
  const [counter, setCounter] = useState(10)
	return (
		<div>
			<h2>Counter: {counter}</h2>
			<hr />
			<button onClick={() => setCounter(c => c+1)}>+1</button>
		</div>
	)
}

export default CounterApp
