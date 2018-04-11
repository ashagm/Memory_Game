import React, { Component } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/NavBar";

import './App.css';

class App extends Component {
  render() {
    return (
       <div>
        <Navbar />
        <Header />
        <Main />
      </div>     
    );
  }
}

export default App;
