import { combineReducers } from 'redux'

import todos from './todoReducers.js'
import search from './searchReducers.js'

const todoApp = combineReducers({
  todos: todos,
  search: search
})

export default todoApp
