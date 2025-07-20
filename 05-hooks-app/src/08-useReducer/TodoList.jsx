import TodoItem from "./TodoItem"

const TodoList = ({ todos, handleDeleteTodo, onToggleTodo }) => {
	return (
		<ul className='list-group'>
			{todos.map((item) => (
				<TodoItem
					{...item}
					key={item.id}
					handleDeleteTodo={handleDeleteTodo}
					onToggleTodo={onToggleTodo}
				/>
			))}
		</ul>
	)
}

export default TodoList
