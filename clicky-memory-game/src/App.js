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
    score : 0,
    clickedColors :[]
  };

  // handleClick = event => {
  //   console.log(event.target.clicked);    
  //   //color got clicked
  //   event.target.clicked = 1;

  //   // console.log(this.state.clickedColors.includes(event.target.id));
    
  //   if(event.target.clicked){

  //   }else{
  //     event.target.clicked = true;
  //   }

  //   if(!this.state.clickedColors.includes(event.target.id)){
  //     this.state.clickedColors.push(event.target.id);
  //     this.render(); //re render
  //   }
    
  //   console.log(this.state.clickedColors)
    
  // };

  handleClick = propsData => {
    console.log(propsData);
    if(propsData.clicked){
      console.log("this has already been clicked")
    }else{
      console.log("clicked for the first time");
      this.setState({score : this.state.score + 1}); 
      this.setState({clickedColors: this.state.clickedColors.push(propsData.id)})

      console.log(this.state.clickedColors);  
    }
    
  };


  render() {
    return (
       <div className="page-content">
        <Navbar  score={this.state.score}/>
        <Header />
        <Main>
          {this.state.colors.sort(() => Math.random() - 0.5).map(
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
