import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Dropdown from './dropdown';
import Badge from './badge'
import Clock from './Clock'
class App extends Component {
    
    render() {
        return (
            <div>
                {/* <Clock/>

                <hr/>
                <Badge caption="Sent"/>
                <Badge caption="Inbox"/> */}

                <Dropdown/>

            </div>
        );
    }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('mount-point'))