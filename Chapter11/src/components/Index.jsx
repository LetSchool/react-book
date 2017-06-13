import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class Index extends React.Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		return (
			<div className="ui raised segment">
				<ul className="ui list">
					<li>
						<Link to="/user/leon">Designer</Link>
					</li>
					<li>
						<Link to="/user/fred">Programmer</Link>
					</li>
				</ul>

				<h1>Index</h1>
			</div>
		)
	}
}

export default Index
