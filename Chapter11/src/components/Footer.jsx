import React from 'react'

class Footer extends React.Component {
	render() {
		var footStyle = {
			marginTop: '50px'
		}
		var linkStyle = {
			marginLeft: '20px',
			color: '#FFFFFF'
		}

		return (
			<div className={'ui basic padded inverted center aligned segment footer'} style={ footStyle }>
				<p><i className="mail outline icon"></i> contact@letschool.com <a href="https://www.facebook.com/LetSchool/" target="_blank" style={linkStyle}><i className="facebook icon"></i></a></p>
				<p>Copyright &copy; LetSchool. All Rights Reserved.</p>
			</div>
		)
	}
}

export default Footer
