import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render() {
        return (
            <div className="ui buttons">
                <button className="ui button active">Cancel</button>
                <div className="or"></div>
                <button className="ui positive button">Save</button>
            </div>
        );
    }
}

ReactDOM.render (
    <App />,
    document.getElementById("app")
)
