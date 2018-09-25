import React from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import colorsArr from "./colorsArr.json";
import "./App.css";
import easyArr from "./easyArr.json"

import logo from './logo.svg';

function randomCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
      return array;
};

class App extends  React.Component {

  // This is important to keep our json the same but allow people to alter an individual "instance" of our friends array.
  state = {
    colorsArr,
    easyArr,
    scoreNow: 0,
    scoreBest: 0,
    EndScreen: "",
    clicked: [],
  };

  clickMe = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.updateScore();
      // changing the value of "clicked" in the state array for this entry in the ColorsArr
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.reset();
    }
  };

  playEasy = (event) => {
    event.preventDefault();
    this.setState({ colorsArr: easyArr })
  }

  updateScore = () => {
    const newScore = this.state.scoreNow + 1;
    this.setState({
      scoreNow: newScore,
      EndScreen: ""
    });
    if (newScore >= this.state.scoreBest) {
      this.setState({ scoreBest: newScore });
    }
    if (newScore === this.state.colorsArr.length) {
      this.setState({ EndScreen: "You win!" });
    }
    this.shuffleArr();
  };

  // resets the entire page. State is updated and the shuffle function is called.
  reset = () => {
    this.setState({
      scoreNow: 0,
      scoreBest: this.state.scoreBest,
      EndScreen: "You already guessed that!",
      clicked: []
    });
    this.shuffleArr();
  };

  // shuffles the entries in the colorsArr and updates it in the state.
  shuffleArr = () => {
    let shuffledArray = randomCards(this.state.colorsArr);
    this.setState({ CardsAPI: shuffledArray });
  };


  render(){
    return (
  
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-5 align-middle">
              <h1 className="row" id="clickyGame">Clicky Game</h1>
              <h3 className="row instructions end">{this.state.EndScreen}</h3>
            </div>
            <div className="col-1">
              <img src={logo} className="App-logo row" alt="logo"/>
              <button id="easyMode" onClick={playEasy()}>Switch to Easy Mode</button>
            </div>
            <div className="col-4 offset-2 instructions">
              <h2 className="App-title">Click each color only once.</h2> 
              <h2 className="App-title">Each correct color is 1 point.</h2>
              <h3 className="score" id="currentScore">Score: {this.state.scoreNow}</h3>
              <h3 className="score" id="highScore">High Score: {this.state.scoreBest}</h3>
            </div>
          </div>
        </div>
      </header>
      <Wrapper>
        <div className="container">
          <div className="row">
            {this.state.colorsArr.map(color => (
              <GameCard
                image={color.image}
                key={color.id}
                clickMe={this.clickMe}
                updateScore={this.updateScore}
                reset={this.reset}
                shuffleArr={this.shuffleArr}
                playEasy={this.playEasy}
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
