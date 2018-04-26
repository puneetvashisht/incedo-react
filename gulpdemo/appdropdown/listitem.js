import React, { Component } from 'react';
class ListItem extends Component {
    
    constructor(){
        super();
        this.handleItemClick = this.handleItemClick.bind(this)
       
    }

    handleItemClick(){
        console.log('Select Item, ', this.props.course.name)
        this.props.whenItemClick(this.props.course.name)
    }

    render() {
        return (
            <a onClick={this.handleItemClick} className="dropdown-item" href="#">{this.props.course.name}</a>
        );
    }
}

export default ListItem;