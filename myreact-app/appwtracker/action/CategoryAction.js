
import dispatcher from '../dispatcher';

export function getCategories(){

    let categoryUrl = 'http://localhost:3002/category/'
    fetch(categoryUrl )
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
        dispatcher.dispatch({type:"FETCH_CATEGORIES", categories: myJson});
        // this.setState({categories:myJson })
    });
    }
