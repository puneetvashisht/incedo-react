import React, { Component } from 'react';

class Badge extends Component {

    constructor(){
        super();
        this.state = {count: 0}
    }

    incrementCount(){
        console.log('button is clicked');
        var newcount = this.state.count + 1;
        this.setState({count: newcount})
        console.log(this.state)
    }
 
    render() {
        return (
             <button type="button" className="btn btn-primary" onClick={this.incrementCount.bind(this)}>
                {this.props.caption} <span className="badge badge-light">{this.state.count}</span>
            </button>
        );
    }
}

export default Badge;

// var Badge = React.createClass({
//     render: function(){

//         return (
//             <button type="button" className="btn btn-primary">
//                 {this.props.caption} <span className="badge badge-light">4</span>
//             </button>
            
//         )
//     }
// })

// module.exports = Badge;