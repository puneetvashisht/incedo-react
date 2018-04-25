import Card from './card'
import React, { Component } from 'react';
class CardList extends Component {

    render() {

        var courses = [
            {name: 'ReactJS'},
            {name: 'AngularJS'},
            {name: 'EmberJS'},
            {name: 'NodeJS'}
        ]
        var list = courses.map(function(course, i) {
            console.log(course);
            return <Card key={i} caption={course.name}></Card>
        })
        return (
            <ul>
                {list}
             </ul>   
            
        )
    }
}

export default CardList;

// var Card = require('./card')
// var CardList = React.createClass({
//     render: function(){
        

        
//     }
// })

// module.exports = CardList
