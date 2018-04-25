var Badge = React.createClass({
    render: function(){

        return (
            <button type="button" className="btn btn-primary">
                {this.props.caption} <span className="badge badge-light">4</span>
            </button>
            
        )
    }
})

module.exports = Badge;