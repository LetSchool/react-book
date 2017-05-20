const ADD_TODO = 'ADD_TODO'

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.text
      ]
    default:
      return state
  }
}

export default todos
