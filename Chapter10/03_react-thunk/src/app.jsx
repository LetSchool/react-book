import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import store from './store/index.js'
import TodoList from './components/TodoList.jsx'

ReactDOM.render((
    <Provider store={store}>
    	<TodoList />
    </Provider>
    ), document.querySelector('#app')
)
