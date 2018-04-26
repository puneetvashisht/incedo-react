import React, { Component } from 'react';

class Clock extends Component {

    constructor(){
        super();
        this.state = { today: new Date() }
    }

    componentWillMount() {
        console.log('Initialization code..')
        this.interval = setInterval(()=> {
            this.tick();
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick(){
        this.setState({today: new Date()})
    }
    
    render() {
        return (
            <div>
                <h2>Clock</h2>
                <h3>{this.state.today.toLocaleDateString()}</h3>
                <h3>{this.state.today.toLocaleString()}</h3>
                <h3>{this.state.today.toLocaleTimeString()}</h3>

                <h4>{this.state.today.getHours()} : {this.state.today.getMinutes()} : {this.state.today.getSeconds()}</h4> 
             </div>
        );
    }
}

export default Clock;



// // 1. Create a React class

// var Clock = React.createClass({
//     render: function(){
//         var today = new Date();

//         return (
//             <div>
//                 <h2>Clock</h2>
//                 <h3>{this.state.today.toLocaleDateString()}</h3>
//                 <h3>{this.state.today.toLocaleString()}</h3>
//                 <h3>{this.state.today.toLocaleTimeString()}</h3>

//                 <h4>{this.state.today.getHours()} : {this.state.today.getMinutes()} : {this.state.today.getSeconds()}</h4> 
//              </div>
            
//         )
//     }
// })

// // 2. Create an object of that class

// // var obj = React.createElement(Clock, {})

// // 3. Render that object on the DOM

// setInterval(()=> {
//     console.log('Set timeout')
//     var obj = React.createElement(Clock, {})
//     ReactDOM.render(obj, document.getElementById('mount-point'))
// }, 1000)


