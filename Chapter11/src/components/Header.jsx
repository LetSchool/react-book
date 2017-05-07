import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class Header extends React.Component {
	constructor(props, context) {
		super(props, context)
        this.state = {
        }
	}

	sidebar = () => {
		$(this.refs.sidebar).sidebar('toggle')
	}

	render() {
		var transparentStyle = {
			background: 'transparent',
			border: 0,
			boxShadow: 'none'
		}
		var cursorStyle = {
			cursor: 'pointer'
		}

		var Items =	(
			<Link to="/blog" className={'item'} style={cursorStyle} onClick={this.props.service}>
				Blog
			</Link>
		)

		return (
			<div className="ui grid">
				<div className="computer only row">
					<div className="column">
						<div className={'ui top fixed menu'} style={transparentStyle}>
							<div className={'left menu'}>
								<Link to="/" className={'item'} style={cursorStyle}>
									<strong>{this.props.serviceName}</strong>
								</Link>
								{Items}
							</div>
						</div>
					</div>
				</div>

				<div className="tablet only mobile only row">
					<div className="column">
						<div className="ui top fixed menu" style={transparentStyle}>
							<div className={'left menu'}>
								<div className={'item'} onClick={this.sidebar}>
									<i className="sidebar icon"></i>
								</div>
							</div>
						</div>

						<div ref='sidebar' className="ui sidebar vertical menu">
							<Link to="/" className={'item'}>
								<strong>{this.props.serviceName}</strong>
							</Link>
							{Items}
						</div>
						<div className="pusher"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header
