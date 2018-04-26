
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import AddCourse from './addcourse';

class App extends Component {
  
    render() {
        return (
            <div className="container">
                    <h2>Courses</h2>

                    <AddCourse/>
                    <hr/>
                    {/* Display list of course */}
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