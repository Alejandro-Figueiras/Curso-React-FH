import { useForm } from "../hooks/useForm"

const FormWithCustomHook = () => {
	const { username, email, password, onInputChange, onResetForm } = useForm({
		username: "",
		email: "",
		password: "",
	})

	return (
		<div>
			<h2>Form with Custom Hook</h2>
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

			<input
				type='password'
				className='form-control mt-2'
				placeholder='Contraseña'
				name='password'
				value={password}
				onChange={onInputChange}
			/>

			<button type='button' onClick={() => onResetForm()} className="mt-2">
				Reset
			</button>
		</div>
	)
}

export default FormWithCustomHook
