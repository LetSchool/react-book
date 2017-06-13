import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class Links extends React.Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		return (
			<ul className="ui list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/topic">Topic</Link>
				</li>
			</ul>
		)
	}
}

export default Links
