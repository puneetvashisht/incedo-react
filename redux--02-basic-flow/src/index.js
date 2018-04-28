import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
//Reducer

//
let myStore = createStore(reducer, applyMiddleware(logger))

// store.dispatch({
//     type: "ADD_COUNTER",
//     value: 6
// })


ReactDOM.render(<Provider store= {myStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
