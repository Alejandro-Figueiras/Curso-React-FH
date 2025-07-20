const TodoItem = ({ id, todo, done, handleDeleteTodo, onToggleTodo }) => {
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			<span onClick={() => onToggleTodo(id)} className={`${done && 'text-decoration-line-through'}`}>{todo}</span>
			<button className='btn btn-danger' onClick={() => {handleDeleteTodo(id)}}>Borrar</button>
		</li>
	)
}

export default TodoItem
