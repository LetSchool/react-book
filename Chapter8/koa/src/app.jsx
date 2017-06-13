import React from 'react'
import ReactDOM from 'react-dom'
import createReactClass from 'create-react-class'

const App = createReactClass({
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
