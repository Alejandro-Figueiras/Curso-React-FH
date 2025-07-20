import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

const heavySuff = (iterationNumber = 100) => {
	for (let i = 0; i < iterationNumber; i++) {
		console.log("Ahí vamos...")
	}
	return `${iterationNumber} iteraciones realizadas`
}

const MemoHook = () => {
  const {counter, increment} = useCounter(4000)
  const [show, setShow] = useState(true)

	const memorizedValue = useMemo(() => heavySuff(counter), [counter])
  return (
    <div>
			<h2>Counter: <small>{counter}</small></h2>
			<hr />

			<h4>{memorizedValue}</h4>

			<button onClick={() => increment()}>+1</button>
			{/* <button onClick={() => reset()}>Reset</button>
			<button onClick={() => decrement()}>-1</button> */}
      <button onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
		</div>
	)
}

export default MemoHook