import React, { Component } from 'react';
import Badge from './badge'
class Card extends Component {
   
    render() {
        return (
            <div className="card">
            {/* <img className="card-img-top" src="http://via.placeholder.com/100x180" alt="Card image cap"/> */}
            <div className="card-body">
                <h5 className="card-title">{this.props.caption}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Badge caption="Votes"/>
            </div>
            </div>
        );
    }
}

export default Card;


// var Badge = require('./badge')
// var Card = React.createClass({
//     render: function(){

//         return (
//             <div className="card">
//             {/* <img className="card-img-top" src="http://via.placeholder.com/100x180" alt="Card image cap"/> */}
//             <div className="card-body">
//                 <h5 className="card-title">{this.props.caption}</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <Badge caption="Votes"/>
//             </div>
//             </div>
            
//         )
//     }
// })
// module.exports = Card

