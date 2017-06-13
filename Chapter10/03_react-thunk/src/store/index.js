import { createStore, applyMiddleware  } from 'redux'
import Thunk from 'redux-thunk'

import todoApp from '../reducers/index.js'

let store = createStore(todoApp, applyMiddleware(Thunk))

export default store
