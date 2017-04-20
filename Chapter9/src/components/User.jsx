import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import Links from 'Source/components/Links.jsx'

class User extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			name: props.match.params.name
		}
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState ({
			name: nextProps.match.params.name
		})
	}

	render() {
		return (
			<div className="ui raised segment">
				<ul className="ui list">
					<li>
						<Link to="/">Index</Link>
					</li>
				</ul>

				<h1>User: Hello {this.state.name} !!</h1>
			</div>
		)
	}
}

export default User
