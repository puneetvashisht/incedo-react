// var CardList = require('./cardlist')
import CardList from './cardlist'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class App extends Component {
  
    render() {
        return (
            <div className="container">
                <CardList/>
             </div>    
        );
    }
}

export default App;
// var App = React.createClass({
//     render: function(){
        

//         return (
//             <div className="container">
//                 <CardList/>
//              </div>   
            
//         )
//     }
// })

    // var obj = React.createElement(Badge, {})
    ReactDOM.render(<App/>, document.getElementById('mount-point'))