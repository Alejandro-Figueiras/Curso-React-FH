import { useForm } from "../hooks/useForm"

const TodoAdd = ({ onAdd }) => {
	const { todo, onInputChange, onResetForm } = useForm({
		todo: "",
	})

	const handleSubmit = (event) => {
		event.preventDefault()
		if (todo.trim().length > 0) {
			onAdd({
				id: new Date().getTime(),
				todo,
				done: false,
			})
      onResetForm()
    }
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				className='form-control'
				placeholder='¿Qué hay que hacer?'
				name='todo'
				value={todo}
				onChange={onInputChange}
			/>
			<button type='submit'>Agregar</button>
		</form>
	)
}

export default TodoAdd
