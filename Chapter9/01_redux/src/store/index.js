import { createStore } from 'redux'

import todoApp from '../reducers/index.js'

let store = createStore(todoApp)

export default store
