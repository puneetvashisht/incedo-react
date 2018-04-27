import React, { Component } from 'react';

class CategoryListItem extends Component {

    constructor(props){
        super(props);
        this.state = {disabled: true, categoryName: props.category.categoryName}
        this.deleteCategory = this.deleteCategory.bind(this)
        this.updateCategory = this.updateCategory.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({categoryName: e.target.value})
    }

    deleteCategory(){
        this.props.whenItemDelete(this.props.category._id)
    }
    updateCategory(){
        this.setState({disabled: false})
    }
    
    render() {
        return (

            <li >
            <input type="text" onChange={this.handleChange} value={this.state.categoryName} disabled= {this.state.disabled}/>

        
            <button onClick={this.deleteCategory}>Delete</button>
            <button onClick={this.updateCategory}>Edit</button>
            </li>
            
        );
    }
}

export default CategoryListItem;