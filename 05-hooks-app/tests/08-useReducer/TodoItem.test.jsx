import { beforeEach, describe, expect, test, vitest } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import TodoItem from "../../src/08-useReducer/TodoItem"

describe("Pruebas en <TodoItem />", () => {
	const todo = {
		id: 1,
		description: "Demo Todo",
		done: false,
	}
	const handleDeleteTodo = vitest.fn()
	const onToggleTodo = vitest.fn()

	beforeEach(() => {
		vitest.clearAllMocks()
	})

	test("debe de mostrar el todo pendiente", () => {
		const { getByText } = render(
			<TodoItem
				id={todo.id}
				todo={todo.description}
				done={todo.done}
				handleDeleteTodo={handleDeleteTodo}
				onToggleTodo={onToggleTodo}
			/>
		)
		expect(getByText(todo.description)).toBeTruthy()
		expect(getByText(todo.description).className).not.toContain(
			"text-decoration-line-through"
		)
	})
	test("debe de mostrar el todo completado", () => {
		const completedTodo = { ...todo, done: true }
		const { getByText } = render(
			<TodoItem
				id={completedTodo.id}
				todo={completedTodo.description}
				done={completedTodo.done}
				handleDeleteTodo={handleDeleteTodo}
				onToggleTodo={onToggleTodo}
			/>
		)
		expect(getByText(completedTodo.description).className).toContain(
			"text-decoration-line-through"
		)
	})
	test("debe de llamar onToggleTodo al hacer click en el todo", () => {
		const { getByText } = render(
			<TodoItem
				id={todo.id}
				todo={todo.description}
				done={todo.done}
				handleDeleteTodo={handleDeleteTodo}
				onToggleTodo={onToggleTodo}
			/>
		)
		fireEvent.click(getByText(todo.description))
		expect(onToggleTodo).toHaveBeenCalledWith(todo.id)
	})
	test("debe de llamar handleDeleteTodo al hacer click en el botón de borrar", () => {
		const { getByRole } = render(
			<TodoItem
				id={todo.id}
				todo={todo.description}
				done={todo.done}
				handleDeleteTodo={handleDeleteTodo}
				onToggleTodo={onToggleTodo}
			/>
		)
		const deleteButton = getByRole("button", { name: "Borrar" })
		fireEvent.click(deleteButton)
		expect(handleDeleteTodo).toHaveBeenCalledWith(todo.id)
	})
})
