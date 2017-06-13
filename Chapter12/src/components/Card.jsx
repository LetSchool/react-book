import React from 'react'
import ReactDOM from 'react-dom'

class Card extends React.Component {
	render() {
		var aboutSectionStyle = {
            display: 'inline-block',
            position: 'relative',
            top: '23%',
            left: '10%',
            backgroundColor: this.props.color,
			width: '70%',
            height: '63%'
        }
        var aboutBorderStyle = {
            display: 'inline-block',
            border: 'solid 2px #2c272d',
            position: 'absolute',
            top: '13%',
            left: '17%',
			width: '70%',
            height: '60%'
        }
		var columnStyle = {
			minHeight: '400px'
		}

		return (
			<div className="column" style={columnStyle}>
				<div className="ui basic segment" style={aboutSectionStyle}></div>
				<div className="ui basic very padded segment" style={aboutBorderStyle}>
					<span className="ui huge header">{this.props.cardTitle}</span>
					<p>{this.props.cardContent}</p>
				</div>
			</div>
		);
	}
}

export default Card;
