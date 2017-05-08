import React from 'react'
import ReactDOM from 'react-dom'
import { connect  } from 'react-redux'

import actions from 'Source/actions'

const mapStateToProps = (state) => {
    return {
        service: state.service
    }
}

class BlogWriter extends React.Component {
    submit = () => {
        var title = this.refs.title.value
        var content = this.refs.content.value

        var conditions = {
            title,
            content
        }

        if (title == '')
            return

        this.props.dispatch(actions.blog.createEntry(conditions))
    }

	render() {
		return (
			<div className="ui basic vertical segment">
				<div className="ui divider hidden"></div>
				<div className="ui form">
					<div className="field">
						<label>Title</label>
						<input ref="title" type="text" />
					</div>
					<div className="field">
						<label>Content</label>
						<textarea ref="content" rows="6"></textarea>
					</div>
					<button className="ui secondary basic button" onClick={this.submit}>Submit</button>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(BlogWriter)
