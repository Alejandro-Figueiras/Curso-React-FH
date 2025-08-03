import { beforeEach, describe, expect, test, vitest } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import TodoApp from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/hooks/useTodo"

vitest.mock("../../src/hooks/useTodo")

describe("Pruebas en <TodoItem />", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, todo: "Todo #1", done: false },
      { id: 2, todo: "Todo #2", done: true },
    ],
    handleDeleteTodo: vitest.fn(),
    handleToogleTodo: vitest.fn(),
    onNewTodo: vitest.fn(),
  })

  beforeEach(() => {
    vitest.clearAllMocks()
  })

	test("debe de renderizar el componente correctamente", () => {
		const { getByText } = render(<TodoApp />)

    expect(getByText("Todo #1")).toBeTruthy()
    expect(getByText("Todo #2")).toBeTruthy()
    expect(getByText("Agregar Todo")).toBeTruthy()
	})

  test("debe de llamar handleDeleteTodo al hacer click en el botón de borrar", () => {
    const { getByText } = render(<TodoApp />)

    fireEvent.click(getByText("Borrar"))
    expect(useTodo().handleDeleteTodo).toHaveBeenCalled()
  })

  test("debe de llamar onToggleTodo al hacer click en el todo", () => {
    const { getByText } = render(<TodoApp />)

    fireEvent.click(getByText("Todo #1"))
    expect(useTodo().handleToogleTodo).toHaveBeenCalledWith(1)
  })

  test("debe de agregar un nuevo todo al hacer submit en el formulario", () => {
    const { getByPlaceholderText } = render(<TodoApp />)

    const input = getByPlaceholderText("¿Qué hay que hacer?")
    fireEvent.change(input, { target: { value: "Nuevo Todo" } })
    fireEvent.submit(input)

    expect(useTodo().onNewTodo).toHaveBeenCalledWith("Nuevo Todo")
  })
})
