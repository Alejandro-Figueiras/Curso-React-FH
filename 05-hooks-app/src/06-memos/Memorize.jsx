import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import Small from "./Small"

const Memorize = () => {
  const {counter, increment} = useCounter()
  const [show, setShow] = useState(true)
  return (
    <div>
			<h2>Counter: <Small value={counter} /></h2>
			<hr />

			<button onClick={() => increment()}>+1</button>
			{/* <button onClick={() => reset()}>Reset</button>
			<button onClick={() => decrement()}>-1</button> */}
      <button onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
		</div>
	)
}

export default Memorize