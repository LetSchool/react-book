import React from 'react'

import { addTodo, changeTodoInput, changeSearchInput } from '../actions/todoActions.js'
import store from '../store/index.js'


class TodoList extends React.Component {
	constructor(props) {
		let state = store.getState()
		super(props);
		this.handleTodoInput = this.handleTodoInput.bind(this);
		this.handleSearchInput = this.handleSearchInput.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			todos: state.todos.list,
      		todoInputText: state.todos.todo,
      		searchInputText: state.search
		};
	}

	componentDidMount() {
		const self = this

	    store.subscribe(function () {
	    	const state = store.getState()
		    self.setState({ todos: state.todos.list, todoInputText: state.todos.todo, searchInputText: state.search })
		})
	}

	handleTodoInput(evt) {
		store.dispatch(changeTodoInput(evt.target.value))
	}

	handleSearchInput(evt) {
		store.dispatch(changeSearchInput(evt.target.value))
	}

	handleClick(evt) {
		store.dispatch(addTodo(this.state.todoInputText))
		store.dispatch(changeTodoInput(''))
	}

	render() {
		const self = this
		const todoList = this.state.todos.map(function (todo, key) {
    		if (todo.includes(self.state.searchInputText))
        		return <li key={key}>{todo}</li>
        	else
        		return null
    	})

		return (
			<div>
				<p>Search:</p>
				<input type="text" value={this.state.searchInputText} onChange={this.handleSearchInput}/>
                <br />
                <br />
				<p>New Todo:</p>
				<input type="text" value={this.state.todoInputText} onChange={this.handleTodoInput}/>
                <br />
                <button type="button" onClick={this.handleClick}>Add</button>
		        <ul>{todoList}</ul>
			</div>
		)
	}
}

export default TodoList
