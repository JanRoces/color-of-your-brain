import React, { Component } from "react";
import PlayPage from "./PlayPage";
import "./style/MainPage.css";
import logo from "./../artwork/logo.png";

class MainPage extends Component {
  state = { status: "MAIN" };

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
          <div>
            <button className="play-button">HOW TO PLAY</button>
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
        <div>
          <h1>GAME OVER</h1>
        </div>
      );
    }
  }

  playGame = () => {
    var s = "PLAY";
    this.setState({ status: s });
    console.log("STATUS: ", this.state.status);
  };

  gameOver = () => {
    var s = "GAMEOVER";
    this.setState({ status: s });
    console.log("STATUS: ", this.state.status);
  };
}

export default MainPage;
