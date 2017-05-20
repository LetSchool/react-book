import React from 'react'
import ReactDOM from 'react-dom'

import { addTodo, searchTodo } from '../actions/todoActions.js'
import store from '../store/index.js'


class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.searchTextChange = this.searchTextChange.bind(this);
		this.newTodoTextChange = this.newTodoTextChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			todos: [],
			newTodoText: '',
			searchText: ''
		};
	}

	componentDidMount() {
		const self = this

	    store.subscribe(function () {
	    	const state = store.getState()

		    self.setState({ todos: state.todos, searchText: state.search })
		})
	}

	searchTextChange(evt) {
		store.dispatch(searchTodo(evt.target.value))
	}

	newTodoTextChange(evt) {
        this.setState({
            newTodoText: evt.target.value
        });
	}

	handleClick(evt) {
		store.dispatch(addTodo(this.state.newTodoText))
		this.setState({ newTodoText: '' })
	}

	render() {
		const self = this
		const todoList = this.state.todos.map(function (todo, key) {
    		if (todo.includes(self.state.searchText))
        		return <li key={key}>{todo}</li>
        	else
        		return null
    	})

		return (
			<div>
				<p>Search:</p>
				<input type="text" value={this.state.searchText} onChange={this.searchTextChange}/>
                <br />
                <br />
				<p>New Todo:</p>
				<input type="text" value={this.state.newTodoText} onChange={this.newTodoTextChange}/>
                <br />
                <button type="button" onClick={this.handleClick}>Add</button>
		        <ul>{todoList}</ul>
			</div>
		)
	}
}

export default TodoList
