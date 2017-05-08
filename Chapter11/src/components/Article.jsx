import React from 'react'
import ReactDOM from 'react-dom'
import { connect  } from 'react-redux'
import { Link } from 'react-router-dom'

import actions from 'Source/actions'

import Header from 'Source/components/Header.jsx'
import Footer from 'Source/components/Footer.jsx'

const mapStateToProps = (state) => {
    return {
        service: state.service,
        blog: state.blog
    }
}

class Article extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			serviceName: props.service.serviceName,
            blog: props.blog
		}
	}

	componentWillMount = () => {
        this.props.dispatch(actions.service.getService())

        if (this.props.match.params.id)
            this.props.dispatch(actions.blog.getArticle({ id: this.props.match.params.id }))
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            serviceName: nextProps.service.serviceName,
            blog: nextProps.blog
        })
    }

	render() {
        var title
        var content
        var updated

        if (this.state.blog.article) {
            title = this.state.blog.article.title
            content = this.state.blog.article.content
            updated = this.state.blog.article.updated
        }

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
                                    <h1>{title}</h1>
                                    <div className="ui divider"></div>
                                    <h3>{content}</h3>

                                    <div className="ui divider hidden"></div>
                                    <div className="ui divider hidden"></div>
                                    <p>{updated}</p>
                                    <div className="ui divider hidden"></div>
                                    <Link to="/blog" className="ui secondary basic button">Go Back</Link>
                                </div>
                            </div>

                            <div className="one column mobile only row">
                                <div className="column">
                                    <h1>{title}</h1>
                                    <div className="ui divider"></div>
                                    <h3>{content}</h3>

                                    <div className="ui divider hidden"></div>
                                    <div className="ui divider hidden"></div>
                                    <p>{updated}</p>
                                    <div className="ui divider hidden"></div>
                                    <Link to="/blog" className="ui secondary basic button">Go Back</Link>
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

export default connect(mapStateToProps)(Article)
