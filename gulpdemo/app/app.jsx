var CardList = require('./cardlist')
var App = React.createClass({
    render: function(){
        

        return (
            <div className="container">
                <CardList/>
             </div>   
            
        )
    }
})

    // var obj = React.createElement(Badge, {})
    ReactDOM.render(<CardList/>, document.getElementById('mount-point'))