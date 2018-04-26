import React, { Component } from 'react';
import Button from './button'
import axios from 'axios'

class AddCourse extends Component {

    constructor(){
        super();
        this.state = {
            courseName: '', message: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        console.log(e.target.value)
        this.setState({courseName : e.target.value})
    }

    handleClick(e){
        console.log('On the click event , ', this.state.courseName)
        axios.post('http://localhost:3000/courses', {
            name: this.state.courseName
          })
          .then( (response) => {
            console.log(response);
            if(response.status == 201){
                this.setState({message: response.data.message, courseName: ''})
            }
          })
          .catch( (error)=> {
            console.log(error);
          });
        //AJAX call
    }
    
    render() {
        return (
            <div className="input-group mb-3">
            <div>{this.state.message}</div>
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Course Name</span>
            </div>
            <input type="text" onChange={this.handleChange} value={this.state.courseName} className="form-control" placeholder="React, Angular.. etc" aria-label="Username" aria-describedby="basic-addon1"/>
            <Button caption="Add Course" whenClick={this.handleClick}/ >
            </div>
        );
    }
}

export default AddCourse;