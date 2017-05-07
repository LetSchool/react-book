import React from 'react'
import ReactDOM from 'react-dom'
import { connect  } from 'react-redux'

import actions from 'Source/actions'

import Header from 'Source/components/Header.jsx'
import Footer from 'Source/components/Footer.jsx'
import BlogWriter from 'Source/components/BlogWriter.jsx'

const mapStateToProps = (state) => {
    return {
        service: state.service
    }
}

class Entry extends React.Component {
	render() {
		return (
            <div className="one column row">
                <div className="column">
                    <h1>Man must explore, and this is exploration at its greatest</h1>
                    <p>Problems look mighty small from 150 miles up</p>
                </div>
            </div>
		);
	}
}

class Blog extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			serviceName: props.service.serviceName
		}
	}

	componentWillMount = () => {
        var service = this.props.dispatch(actions.service.getService())
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            serviceName: nextProps.service.serviceName
        })
    }

	render() {
		return (
			<div>
				<Header serviceName={this.state.serviceName} ref='header' service={this.service} />

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
                                        <Entry />
                                        <Entry />
                                        <Entry />
                                    </div>

                                    <BlogWriter />

                                </div>
                            </div>

                            <div className="one column mobile only row">
                                <div className="column">
                                    <div className="ui vertically divided grid">
                                        <Entry />
                                        <Entry />
                                        <Entry />
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
