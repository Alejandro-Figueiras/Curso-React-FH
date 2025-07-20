import { useCallback, useState } from "react"
import ShowIncrement from "./ShowIncrement"

const CallbackHook = () => {
	const [counter, setCounter] = useState(10)
	
  const increment = useCallback(() => {
    setCounter(counter => counter +1)
  }, [])

	return (
		<div>
			<h2>useCallback hook: {counter}</h2>
			<hr />

      <ShowIncrement increment={increment}/>
		</div>
	)
}

export default CallbackHook
