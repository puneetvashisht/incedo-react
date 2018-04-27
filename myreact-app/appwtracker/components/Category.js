import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';
import * as CategoryAction from "../action/CategoryAction"
import categoryStore from '../store/CategoryStore'
class Category extends Component {

    constructor(){
        super();
        this.categoryUrl = 'http://localhost:3002/category/'
        this.state = {
            categories : [], message : ''
        }
        this.getCategories = this.getCategories.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
    }

    deleteCategory(categoryId){
        
        fetch(this.categoryUrl + categoryId , {
            method: 'DELETE'
        })
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            this.setState({message: myJson.message})
            // this.setState({categories:myJson })
        });
        }

    // getCategories(){
    //     fetch(this.categoryUrl )
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((myJson) => {
    //         console.log(myJson);
    //         this.setState({categories:myJson })
    //     });
    //     }

    getCategories(){
        let categories = categoryStore.getCategories();
        this.setState({categories: categories});
    }

    componentWillMount() {
        categoryStore.on("category_change", this.getCategories)
    }

    componentWillUnmount() {
        categoryStore.removeListener("category_change", this.getCategories)
    }

    // componentWillMount() {
    //     categoryStore.on("category_change", ()=>{
    //         let categories = categoryStore.getCategories();
    //         this.setState({categories: categories});
    //     });
    // }

    componentDidMount() {
        // this.getCategories();

        CategoryAction.getCategories()
    }

    render() {
        let categoriesList = this.state.categories.map((category)=>{
            return <CategoryListItem whenItemDelete={this.deleteCategory} key={category._id} category={category}/>
        })

        return (

            <div>
                <h2>Display Categories</h2>

                <h3>{this.state.message}</h3>
                <ul>
                    {categoriesList}
                 </ul>   
             </div>   
            
        );
    }
}

export default Category;