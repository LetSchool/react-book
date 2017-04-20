import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class Start extends React.Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		return (
			<div className="ui raised segment">
				<ul className="ui list">
					<li>
						<Link to="/timer">Start</Link>
					</li>
				</ul>

				<h1>Get Started !</h1>
			</div>
		)
	}
}

export default Start
