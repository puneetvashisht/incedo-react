'use strict';

// 1. Create a React class

var Clock = React.createClass({
    displayName: 'Clock',

    render: function render() {
        var today = new Date();

        return React.createElement(
            'div',
            null,
            React.createElement(
                'h2',
                null,
                'Clock'
            ),
            React.createElement(
                'h3',
                null,
                today.toLocaleDateString()
            ),
            React.createElement(
                'h3',
                null,
                today.toLocaleString()
            ),
            React.createElement(
                'h3',
                null,
                today.toLocaleTimeString()
            ),
            React.createElement(
                'h4',
                null,
                today.getHours(),
                ' : ',
                today.getMinutes(),
                ' : ',
                today.getSeconds()
            )
        );
    }
});

// 2. Create an object of that class

// var obj = React.createElement(Clock, {})

// 3. Render that object on the DOM

setInterval(function () {
    console.log('Set timeout');
    var obj = React.createElement(Clock, {});
    ReactDOM.render(obj, document.getElementById('mount-point'));
}, 1000);