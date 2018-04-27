import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Category from './components/Category'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WorkOut Tracker App</h1>
        </header>
       {/* <Category/> */}
       <Routes/>


      </div>
    );
  }
}

export default App;
