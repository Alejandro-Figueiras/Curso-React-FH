import CounterApp from "./01-useState/CounterApp"
import CounterWithCustomHook from "./01-useState/CounterWithCustomHook"

const HooksApp = () => {
	return (
		<>
			<h1 className="title">HooksApp</h1>
			{/* <CounterApp /> */}
			<CounterWithCustomHook />
		</>
	)
}

export default HooksApp
