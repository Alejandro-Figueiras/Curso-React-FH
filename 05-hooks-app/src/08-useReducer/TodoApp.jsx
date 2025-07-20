import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"

const TodoApp = () => {
	const {todos, handleDeleteTodo, handleToogleTodo, onNewTodo} = useTodo()

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
