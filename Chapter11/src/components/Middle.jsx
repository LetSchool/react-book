import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class Middle extends React.Component {
	render() {
		return (
			<div className="ui container">
				<div className="ui basic center aligned segment">
					<h1>BLOG</h1>
					<p>Subtitle Is Here</p>
				</div>
				<div className="ui stackable two column grid">
					<div className="column">
						<div className="ui basic left aligned segment">
							<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
						</div>
					</div>
					<div className="column">
						<div className="ui basic left aligned segment">
							<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
						</div>
					</div>
				</div>
				<div className="ui basic very padded center aligned segment">
					<Link to="/blog" className="ui secondary basic button" data-tooltip="Lets write something" data-position="top center">To Blog</Link>
				</div>
			</div>
		)
	}
}

export default Middle
