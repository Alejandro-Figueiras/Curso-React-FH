import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"

const initialState = []
const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || []
}

const TodoApp = () => {
	const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos))
	}, [todos])

	const onNewTodo = (todo) => {
		const action = {
			type: "[TODO] Add Todo",
			payload: todo,
		}

		dispatchTodo(action)
	}

	const handleDeleteTodo = (id = "") => {
		dispatchTodo({
			type: "[TODO] Remove Todo",
			payload: id,
		})
	}

  const handleToogleTodo = (id = "") => {
		dispatchTodo({
			type: "[TODO] Toggle Todo",
			payload: id,
		})
	}

	return (
		<div>
			<h2>TodoApp</h2>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						handleDeleteTodo={handleDeleteTodo}
						onToggleTodo={handleToogleTodo}
					/>
				</div>
				<div className='col-5'>
					<h3>Agregar Todo</h3>
					<hr />

					<TodoAdd onAdd={onNewTodo} />
				</div>
			</div>
		</div>
	)
}

export default TodoApp
