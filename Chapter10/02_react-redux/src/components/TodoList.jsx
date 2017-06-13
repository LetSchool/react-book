import React from 'react'
import { connect } from 'react-redux';

import { addTodo, changeTodoInput, changeSearchInput } from '../actions/todoActions.js'

class TodoList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const self = this
		const todoList = this.props.todos.map(function (todo, key) {
    		if (todo.includes(self.props.searchInputText))
        		return <li key={key}>{todo}</li>
        	else
        		return null
    	})

		return (
			<div>
				<p>Search:</p>
				<input type="text" value={this.props.searchInputText} onChange={(evt) => this.props.handleSearchInput(evt.target.value)}/>
                <br />
                <br />
				<p>New Todo:</p>
				<input type="text" value={this.props.todoInputText} onChange={(evt) => this.props.handleTodoInput(evt.target.value)}/>
                <br />
                <button type="button" onClick={() => this.props.handleClick(this.props.todoInputText)}>Add</button>
		        <ul>{todoList}</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
	todos: state.todos.list,
	todoInputText: state.todos.todo,
	searchInputText: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInput: (text) => {
      dispatch(changeSearchInput(text))
    },
    handleTodoInput: (text) => {
      dispatch(changeTodoInput(text))
    },
    handleClick: (text) => {
      dispatch(addTodo(text))
      dispatch(changeTodoInput(''))
    }
  }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(TodoList)
