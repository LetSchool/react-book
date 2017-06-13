import React from 'react'
import ReactDOM from 'react-dom'

import Card from 'Source/components/Card.jsx'

// Section image
import people from 'Source/images/glenn-carstens-peters-203007.jpg'

class Coding extends React.Component {
	constructor(props, context) {
		super(props, context)

        this.state = {
			cardTitle: 'CODING YOUR FIRST REACT LANDING PAGE',
			cardContent: 'Lets coding your page !'
        }
	}

	render() {
		return (
			<div className="ui container">
				<div className="ui stackable two column grid">
					<Card color="#987f47" cardTitle={this.state.cardTitle} cardContent={this.state.cardContent} />
					<div className="column">
						<img className="ui fluid image" src={people} />
					</div>
				</div>
			</div>
		)
	}
}

export default Coding
