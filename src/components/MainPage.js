import React, { Component } from "react";
import PlayPage from "./PlayPage";
import "./style/MainPage.css";
import logo from "./../artwork/logo.png";
import logo_gameover from "./../artwork/game_over.png";

class MainPage extends Component {
  state = { status: "MAIN", score: 0 };

  render() {
    console.log("STATUS: ", this.state.status);
    if (this.state.status === "MAIN") {
      return (
        <div className="main-container">
          <div>
            <img className="main-logo" alt="main-logo" src={logo}></img>
          </div>
          <div>
            <button className="play-button" onClick={this.playGame}>
              PLAY
            </button>
          </div>
        </div>
      );
    } else if (this.state.status === "PLAY") {
      return (
        <div>
          <PlayPage onGameOver={this.gameOver} />
        </div>
      );
    } else if (this.state.status === "GAMEOVER") {
      return (
        <div className="main-container">
          <div>
            <img
              className="main-logo"
              alt="game-over-logo"
              src={logo_gameover}></img>
          </div>
          <h1>SCORE: {this.state.score}</h1>
          <div>
            <button className="play-button" onClick={this.playGame}>
              PLAY AGAIN
            </button>
          </div>
        </div>
      );
    }
  }

  playGame = () => {
    var s = "PLAY";
    this.setState({ status: s });
    console.log("STATUS: ", this.state.status);
  };

  gameOver = (r) => {
    var s = "GAMEOVER";
    this.setState({ status: s, score: r });
    console.log("STATUS: ", this.state.status);
  };
}

export default MainPage;
