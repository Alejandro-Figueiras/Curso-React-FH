export const todoReducer = (initialState = [], action = {}) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload]
    case '[TODO] Remove Todo':
      return initialState.filter(t => t.id != action.payload)
    case '[TODO] Toggle Todo':
      return initialState.map(t => t.id == action.payload ? {
        ...t, done: !t.done
      }: t)

    default:
      break;
  }
  return initialState
}