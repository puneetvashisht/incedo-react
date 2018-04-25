// 1. Create a React class

var Badge = React.createClass({
    render: function(){

        return (
            <button type="button" className="btn btn-primary">
                {this.props.caption} <span className="badge badge-light">4</span>
            </button>
            
        )
    }
})


var Card = React.createClass({
    render: function(){

        return (
            <div className="card">
            <img className="card-img-top" src="http://lorempixel.com/100/180" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Badge caption="Votes"/>
            </div>
            </div>
            
        )
    }
})
    // var obj = React.createElement(Badge, {})
    ReactDOM.render(<Card/>, document.getElementById('mount-point'))



