import React from 'react'
import ReactDOM from 'react-dom'

import Card from 'Source/components/Card.jsx'

// Section image
import sketch from 'Source/images/green-chameleon-21532.jpg'

class Design extends React.Component {
	constructor(props, context) {
		super(props, context)

        this.state = {
			cardTitle: 'DESIGN YOUR FIRST REACT LANDING PAGE',
			cardContent: 'Lets draw the wireframe for your page !'
        }
	}

	render() {
		return (
			<div className="ui container">
				<div className="ui stackable two column grid">
					<div className="column">
						<img className="ui fluid image" src={sketch} />
					</div>
					<Card color="#91af59" cardTitle={this.state.cardTitle} cardContent={this.state.cardContent} />
				</div>
			</div>
		)
	}
}

export default Design
