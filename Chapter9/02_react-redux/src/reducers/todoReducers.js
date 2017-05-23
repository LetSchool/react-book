const ADD_TODO = 'ADD_TODO'
const CHANGE_TODO_INPUT = 'CHANGE_TODO_INPUT'

const initialState = {
    todo: '',
    list: []
}

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [ ...state.list, action.text ]
      }

    case CHANGE_TODO_INPUT:
      return {
        ...state,
        todo: action.text
      }

    default:
      return state
  }
}

export default todos
