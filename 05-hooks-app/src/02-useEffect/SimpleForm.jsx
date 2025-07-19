import { useEffect, useState } from "react"

const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "",
		email: "",
	})

	const { username, email } = formState

	const onInputChange = ({ target }) => {
		const { name, value } = target
		setFormState({
			...formState,
			[name]: value,
		})
	}

	useEffect(() => {
		console.log("Form State changed")
	}, [formState])

	useEffect(() => {
		console.log("Mounted")

		return () => {
			console.log("Unmounted")
		}
	}, [])

	return (
		<div>
			<h2>SimpleForm</h2>
			<hr />

			<input
				type='text'
				className='form-control'
				placeholder='username'
				name='username'
				value={username}
				onChange={onInputChange}
			/>

			<input
				type='text'
				className='form-control mt-2'
				placeholder='jose@gmail.com'
				name='email'
				value={email}
				onChange={onInputChange}
			/>
		</div>
	)
}

export default SimpleForm
