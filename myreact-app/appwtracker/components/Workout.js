import React, { Component } from 'react';
import * as CategoryAction from "../action/CategoryAction"
import categoryStore from '../store/CategoryStore'
class Workout extends Component {

    constructor(){
        super();
        this.state = {
            categories: []
        }
        this.getCategories = this.getCategories.bind(this);
    }

    getCategories(){
        let categories = categoryStore.getCategories();
        this.setState({categories: categories});
    }

    componentWillMount() {
        categoryStore.on("category_change", this.getCategories)
    }

    componentDidMount() {
        // this.getCategories();

        CategoryAction.getCategories()
    }

    componentWillUnmount() {
        categoryStore.removeListener("category_change", this.getCategories)
    }
    
    render() {

        var categoryList = this.state.categories.map((category)=>{
            return <option key={category._id} value = {category._id}>{category.categoryName}</option>
        })

        return (

           <div> 
           <h2>Work Out Component</h2> 
            
            <input type="text" name="workoutname" placeholder = "Enter workout name"/>
            <select>
            {categoryList}
             </select>   

           </div>
        );
    }
}

export default Workout;