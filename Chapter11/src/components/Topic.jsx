import React from 'react'
import ReactDOM from 'react-dom'

import Links from 'Source/components/Links.jsx'

class Topic extends React.Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		return (
			<div class="ui raised segment">
				<Links />
				<h1>Topic</h1>
			</div>
		)
	}
}

export default Topic
