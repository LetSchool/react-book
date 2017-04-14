import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
	constructor(props, context) {
		super(props, context)

        this.state = {

        }
	}

	sidebar = () => {
		$(this.refs.sidebar)
			.sidebar('toggle')

	}

	render() {
		var transparent = {
			background: 'transparent',
			border: 0,
			boxShadow: 'none'
		}

		return (
			<div className="ui grid">
				<div className="computer only row">
					<div className="column">
						<div className={'ui top fixed menu'} style={transparent}>
							<div className={'left menu'}>
								<div className={'item'}>
									<strong>{this.props.serviceName}</strong>
								</div>
								<div className={'item'}>
									About
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="tablet only mobile only row">
					<div className="column">
						<div className="ui top fixed inverted menu" style={transparent}>
							<div className={'left menu'}>
								<div className={'item'} onClick={this.sidebar}>
									<i className="sidebar icon"></i>
								</div>
							</div>
						</div>

						<div ref='sidebar' className="ui sidebar vertical menu">
							<div className={'item'}>
								&nbsp
							</div>
							<div className={'item'}>
								About
							</div>
						</div>
						<div className="pusher"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header
