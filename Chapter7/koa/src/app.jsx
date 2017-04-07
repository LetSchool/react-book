import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass({
    render() {
        return (
            <div>
				<h1>Hello React !!</h1>
			</div>
        )
    }
})

ReactDOM.render((
    <App />
    ), document.querySelector('#app')
)
