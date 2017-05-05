import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
	constructor(props, context) {
		super(props, context)
        this.state = {
        }
	}

	sidebar = () => {
		$(this.refs.sidebar).sidebar('toggle')
	}

	scollTop = () => {
		$('html, body').stop().animate({
			scrollTop: 0
		}, 400)
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
			<div className={'item'} style={cursorStyle} onClick={this.props.service}>
				Service
			</div>
		)

		return (
			<div className="ui grid">
				<div className="computer only row">
					<div className="column">
						<div className={'ui top fixed menu'} style={transparentStyle}>
							<div className={'left menu'}>
								<div className={'item'} style={cursorStyle} onClick={this.scollTop}>
									<strong>{this.props.serviceName}</strong>
								</div>
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
							<div className={'item'} onClick={this.scollTop}>
								<strong>{this.props.serviceName}</strong>
							</div>
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
