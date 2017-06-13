import React from 'react'
import ReactDOM from 'react-dom'
import { connect  } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import actions from 'Source/actions'

import Header from 'Source/components/Header.jsx'
import Footer from 'Source/components/Footer.jsx'

const mapStateToProps = (state) => {
    return {
        service: state.service,
        blog: state.blog
    }
}

class ArticleContent extends React.Component {
    render() {
		return (
            <div className="column">
                <h1>{this.props.title}</h1>
                <div className="ui divider"></div>
                <h3>{this.props.content}</h3>

                <div className="ui divider hidden"></div>
                <div className="ui divider hidden"></div>
                <p>{this.props.updated}</p>
                <div className="ui divider hidden"></div>
                <Link to="/blog" className="ui secondary basic button">Go Back</Link>
                <div className="ui red basic button" onClick={this.props.delete}>Delete</div>
            </div>
        )
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

    delete = () => {
        if (!this.props.match.params.id)
            return

        var conditions = {
            id: this.props.match.params.id
        }

        this.props.dispatch(actions.blog.deleteEntry(conditions))
    }

	render() {
        var entryid,
            title,
            content,
            updated

        if (this.state.blog.article) {
            entryid = this.state.blog.article._id
            title = this.state.blog.article.title
            content = this.state.blog.article.content
            updated = this.state.blog.article.updated
        }

        if (this.state.blog.status == 'delete success') {
			return (
				<Redirect to={'/blog'} />
			)
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
                                <ArticleContent delete={this.delete} title={title} content={content} updated={updated} />
                            </div>

                            <div className="one column mobile only row">
                                <ArticleContent delete={this.delete} title={title} content={content} updated={updated} />
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
