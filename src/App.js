import React from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import colorsAPI from "./colorsAPI.json";
import "./App.css";

import logo from './logo.svg';

const scoreNow = 0;

const scoreBest = 0;

class App extends  React.Component {

  // This is important to keep our json the same but allow people to alter an individual "instance" of our friends array.
  state = {
    colorsAPI
  }

  erase = (key) => {
    this.setState({ colorsAPI: this.state.colorsAPI.filter(color => color.id !== key ) })
  }

  render(){
    return (
  
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-5 align-middle">
              <h1 className="row" id="clickyGame">Clicky Game</h1>
              {/* <img src={logo} className="App-logo row" alt="logo"/> */}
            </div>
            <div className="col-1">
              <img src={logo} className="App-logo row" alt="logo"/>
            </div>
            {/* <br className="col-6"></br> */}
            <div className="col-4 offset-2 instructions">
              <h2 className="App-title">Click each color only once.</h2> 
              <h2 className="App-title">Each correct color is 1 point.</h2>
              <h3 className="score" id="currentScore">Score: {scoreNow}</h3>
              <h3 className="score" id="highScore">High Score: {scoreBest}</h3>
            </div>
          </div>
        </div>
      </header>
      <Wrapper>
        <div className="container">
          <div className="row">
            {this.state.colorsAPI.map(color => (
              <GameCard
                image={color.image}
                key={color.id}
                id = {color.id}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>

    )
  }

}

export default App;
