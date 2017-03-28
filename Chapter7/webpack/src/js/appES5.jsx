var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render: function() {
        return (
            <div className="ui buttons">
                <button className="ui button active">Cancel</button>
                <div className="or"></div>
                <button className="ui positive button">Save</button>
            </div>
        );
    }
});

ReactDOM.render (
    <App />,
    document.getElementById("app")
);
