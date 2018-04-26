import React, { Component } from 'react';
import Button from './button'
import ListItem from './listitem';

class Dropdown extends Component {

    constructor(){
        super();
        this.state= {show: false, 
            courses : [
                {name: 'ReactJS'},
                {name: 'AngularJS'},
                {name: 'EmberJS'}
            ] 
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleClick(){
        console.log('click event fired..')
        this.setState({show: !this.state.show})
        
    }

    handleItemClick(item){
        console.log('In the parent component ', item)
        this.setState({buttonCaption: item, show: false});
    }

    render() {
        let showClass = "dropdown-menu"
        if(this.state.show)
            showClass = "dropdown-menu show"


        var coursesList = this.state.courses.map((course, i)=> (
            <ListItem whenItemClick={this.handleItemClick} key={i} course={course}/>
        ))
        return (
            <div className="dropdown">
                <Button caption={this.state.buttonCaption || "Select Courses"} whenClick={this.handleClick} />
                <div className={showClass} aria-labelledby="dropdownMenuButton">
                    {coursesList}
                </div>
            </div>
        );
    }
}

export default Dropdown;