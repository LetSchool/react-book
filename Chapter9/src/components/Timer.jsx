import React from 'react'
import ReactDOM from 'react-dom'
import { Link, Redirect } from 'react-router-dom'

class Timer extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			number: 10
		}
	}

    componentDidMount = () => {
		setInterval(this.tick, 1000);
	}

	tick = () => {
		if (this.state.number == 0)
			return

		this.setState({
			number: this.state.number - 1
		})
	}

	render() {
		if (this.state.number == 0) {
			return (
				<Redirect to={'/timeup'} />
			)
		}

		return (
			<div className="ui raised segment">
				<h1>{this.state.number}</h1>
			</div>
		)
	}
}

export default Timer
