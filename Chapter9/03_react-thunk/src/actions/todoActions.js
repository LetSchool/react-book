
const ADD_TODO = 'ADD_TODO'
const CHANGE_TODO_INPUT = 'CHANGE_TODO_INPUT'
const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT'

export function addTodo(text) {
  return function (dispatch) {
  	setTimeout(() => {
  		dispatch({ type: ADD_TODO, text })
  	}, 2000)
  }
}

export function changeTodoInput(text) {
  return { type: CHANGE_TODO_INPUT, text }
}

export function changeSearchInput(text) {
  return { type: CHANGE_SEARCH_INPUT, text }
}
