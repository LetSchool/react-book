import React from 'react'
import ReactDOM from 'react-dom'

class BlogWriter extends React.Component {
	render() {

		return (
			<div className="ui basic vertical segment">
				<div className="ui divider hidden"></div>
				<div className="ui form">
					<div className="field">
						<label>Title</label>
						<input type="text" />
					</div>
					<div className="field">
						<label>Content</label>
						<textarea rows="6"></textarea>
					</div>
					<button className="ui secondary basic button">Submit</button>
				</div>

			</div>
		);
	}
}

export default BlogWriter;
