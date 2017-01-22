var React = require('react'),
    ReactDOM = require('react-dom');

var Hello = React.createClass({
    render: function() {
        return (
            <div>Hello World!</div>
        );
    }
});

ReactDOM.render(
    <Hello/>,
    document.getElementById("container")
);
