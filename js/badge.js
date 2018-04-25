"use strict";

// 1. Create a React class

var Badge = React.createClass({
    displayName: "Badge",

    render: function render() {

        return React.createElement(
            "button",
            { type: "button", className: "btn btn-primary" },
            this.props.caption,
            " ",
            React.createElement(
                "span",
                { className: "badge badge-light" },
                "4"
            )
        );
    }
});

var Card = React.createClass({
    displayName: "Card",

    render: function render() {

        return React.createElement(
            "div",
            { className: "card" },
            React.createElement("img", { className: "card-img-top", src: "http://lorempixel.com/100/180", alt: "Card image cap" }),
            React.createElement(
                "div",
                { className: "card-body" },
                React.createElement(
                    "h5",
                    { className: "card-title" },
                    "Card title"
                ),
                React.createElement(
                    "p",
                    { className: "card-text" },
                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                ),
                React.createElement(Badge, { caption: "Votes" })
            )
        );
    }
});
// var obj = React.createElement(Badge, {})
ReactDOM.render(React.createElement(Card, null), document.getElementById('mount-point'));