import React, { Component } from 'react';
import Main from "./components/Main/Main";
import Navbar from "./components/NavBar/NavBar";
import ClickyImage from "./components/ClickyImage/ClickyImage";
import colors from "./colors.json";

import './App.css';

class App extends Component {
  state = {
    colors : colors,
    score : 0,
    topScore : 0,
    status: 'Begin Game!',
    clickedColors :[]
  };

  handleClick = propsData => {
    console.log(propsData);

    if(this.state.clickedColors.includes(propsData.id)){
      //this has already been clicked"
      this.setState({score: 0});  
      this.setState({status: "Incorrect!, Begin again!"});
      this.state.clickedColors = [];
      console.log(this.state.clickedColors);
      if(this.state.topScore < this.state.score){
        this.setState({topScore : this.state.score})
      }    
    }else{
      //clicked for the first time"
      this.setState({score : this.state.score + 1});  
      this.setState({status: "Correct!"});    
      this.state.clickedColors.push(propsData.id); 
      console.log(this.state.clickedColors);
    }
    
  };

  render() {
    return (
       <div className="page-content">
        <Navbar score={this.state.score} topScore={this.state.topScore} status={this.state.status}/>
        <Main>
          {this.state.colors.sort(() => Math.random() - 0.5).map(
            (clickyColor) => (
              <ClickyImage
                id={clickyColor.id}
                key={clickyColor.id}
                image={clickyColor.image}
                // clicked={clickyColor.clicked}
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
