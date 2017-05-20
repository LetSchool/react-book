
const ADD_TODO = 'ADD_TODO'
const SEARCH_TODO = 'SEARCH_TODO'

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function searchTodo(text) {
  return { type: SEARCH_TODO, text }
}
