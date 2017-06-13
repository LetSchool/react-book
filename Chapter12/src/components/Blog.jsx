import React from 'react'
import ReactDOM from 'react-dom'
import { connect  } from 'react-redux'
import { Link } from 'react-router-dom'

import actions from 'Source/actions'

import Header from 'Source/components/Header.jsx'
import Footer from 'Source/components/Footer.jsx'
import BlogWriter from 'Source/components/BlogWriter.jsx'

const mapStateToProps = (state) => {
    return {
        service: state.service,
        blog: state.blog
    }
}

class Entry extends React.Component {
	render() {
        var linkStyle = {
            color: 'black',
            cursor: 'pointer'
        }

		return (
            <div className="one column row">
                <div className="column">
                    <Link to={'/blog/' + this.props.id} style={linkStyle}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.content}</p>
                    </Link>
                </div>
            </div>
		);
	}
}

class Blog extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			serviceName: props.service.serviceName,
            blog: props.blog
		}
	}

	componentWillMount = () => {
        this.props.dispatch(actions.service.getService())
        this.props.dispatch(actions.blog.entryList())
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            serviceName: nextProps.service.serviceName,
            blog: nextProps.blog
        })
    }

	render() {
        var entry = this.state.blog.entries.map((value, index) => {
            if (value) {
                return (
                    <Entry
                        id={value._id}
                        title={value.title}
                        content={value.content}
                        updated={value.updated}
                        key={index}
                    />
                )
            }
        })

		return (
			<div>
				<Header serviceName={this.state.serviceName} />

				<section className="ui basic vertical segment blog-header">
					<div className="ui container">
						<div className="ui basic very padded left aligned segment">
							<h1>BLOG</h1>
						</div>
					</div>
				</section>

                <div className="ui divider hidden"></div>

                <section className="ui basic segment">
                    <div className="ui container">
                        <div className="ui centered grid">
                            <div className="eleven wide one column computer only tablet only row">
                                <div className="column">
                                    <div className="ui vertically divided grid">
                                        {entry}
                                    </div>

                                    <BlogWriter />

                                </div>
                            </div>

                            <div className="one column mobile only row">
                                <div className="column">
                                    <div className="ui vertically divided grid">
                                        {entry}
                                    </div>

                                    <BlogWriter />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

				<Footer serviceName={this.state.serviceName} />
			</div>
		)
	}
}

export default connect(mapStateToProps)(Blog)
