// 1. Create a React class

var Clock = React.createClass({
    render: function(){
        var today = new Date();

        return (
            <div>
                <h2>Clock</h2>
                <h3>{today.toLocaleDateString()}</h3>
                <h3>{today.toLocaleString()}</h3>
                <h3>{today.toLocaleTimeString()}</h3>

                <h4>{today.getHours()} : {today.getMinutes()} : {today.getSeconds()}</h4> 
             </div>
            
        )
    }
})

// 2. Create an object of that class

// var obj = React.createElement(Clock, {})

// 3. Render that object on the DOM

setInterval(()=> {
    console.log('Set timeout')
    var obj = React.createElement(Clock, {})
    ReactDOM.render(obj, document.getElementById('mount-point'))
}, 1000)


