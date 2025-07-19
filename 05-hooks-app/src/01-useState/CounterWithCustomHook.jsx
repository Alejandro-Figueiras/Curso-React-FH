import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook = () => {
	const { counter, increment, decrement, reset } = useCounter(10)

	return (
		<div>
			<h2>Counter with Custom Hook: {counter}</h2>
			<hr />

			<button onClick={() => increment()}>+1</button>
			<button onClick={() => reset()}>Reset</button>
			<button onClick={() => decrement()}>-1</button>
		</div>
	)
}

export default CounterWithCustomHook
