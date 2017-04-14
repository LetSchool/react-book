import React from 'react'
import ReactDOM from 'react-dom'

import Header from 'Source/components/Header.jsx'
import Footer from 'Source/components/Footer.jsx'
import Design from 'Source/components/Design.jsx'
import Coding from 'Source/components/Coding.jsx'
import Middle from 'Source/components/Middle.jsx'
import Service from 'Source/components/Service.jsx'

class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<Header serviceName={this.props.serviceName} />

				<section className="ui basic vertical left aligned segment header">
					<div className="ui container">
						<div className="ui basic very padded segment">
							<h1>REACT STUDIO</h1>
							<h2>lets create you landing page</h2>
						</div>
					</div>
				</section>

				<section className="ui basic very padded segment">
					<Design />
				</section>

				<section className="ui basic segment">
					<Middle />
				</section>

				<div className="ui divider hidden"></div>

				<section className="ui basic segment body"></section>

				<section className="ui basic very padded segment">
					<Coding />
				</section>

				<section className="ui basic segment">
					<Service />
				</section>

				<Footer serviceName={this.props.serviceName} />
			</div>
		)
	}
}

export default LandingPage
