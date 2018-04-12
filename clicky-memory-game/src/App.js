import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/NavBar/NavBar";
import ClickyImage from "./components/ClickyImage/ClickyImage";


import colors from "./colors.json";

import './App.css';

class App extends Component {
  state = {
    colors : colors,
    score : 0
  };

  handleClick = event => {
    console.log('clicked');
    let value = event.target.clicked;
  };

  render() {
    return (
       <div className="page-content">
        <Navbar />
        <Header />
        <Main>
          {this.state.colors.map(
            (clickyColor) => (
              <ClickyImage
                id={clickyColor.id}
                key={clickyColor.id}
                image={clickyColor.image}
                clicked={clickyColor.clicked}
                onClick={this.handleClick}
              />
            )
          )}
         </Main>
      </div>     
    );
  }
}

export default App;
