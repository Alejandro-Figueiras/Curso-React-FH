import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState = []
const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || []
}

export const useTodo = () => {
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

  return {
    todos,
    onNewTodo,
    handleDeleteTodo,
    handleToogleTodo
  }
}