import CounterApp from "./01-useState/CounterApp"
import CounterWithCustomHook from "./01-useState/CounterWithCustomHook"
import FormWithCustomHook from "./02-useEffect/FormWithCustomHook"
import SimpleForm from "./02-useEffect/SimpleForm"

const HooksApp = () => {
	return (
		<>
			<h1 className="title">HooksApp</h1>
			{/* <CounterApp /> */}
			{/* <CounterWithCustomHook /> */}

			{/* <SimpleForm /> */}
			<FormWithCustomHook />
		</>
	)
}

export default HooksApp
