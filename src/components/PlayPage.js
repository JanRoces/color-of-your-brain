import React, { Component } from "react";
import "./style/PlayPage.css";

class PlayPage extends Component {
  state = {
    score: 0,
    colors: [
      { color: "Red", hex: "#ff0000" },
      { color: "Orange", hex: "#ff7800" },
      { color: "Yellow", hex: "#fff700" },
      { color: "Green", hex: "#00ff00" },
      { color: "Blue", hex: "#0000ff" },
      { color: "Purple", hex: "#ae00ff" },
      { color: "Pink", hex: "#ff00ff" },
      { color: "Black", hex: "#000000" },
      { color: "White", hex: "#ffffff" },
    ],
    hexArr: [
      "#ff0000",
      "#ff7800",
      "#fff700",
      "#00ff00",
      "#0000ff",
      "#ae00ff",
      "#ff00ff",
      "#000000",
      "#ffffff",
    ],
    randColor: "Red",
    randHex: "#ff0000"
  };

  componentDidMount() {
    this.renderTable();
  }

  // componentWillMount() {
  //   this.renderTable();
  // }

  render() {
    return (
      <div className="play-container">
        <div className="guide-container">
          <div
            className="color-square"
            id={this.state.randHex}
            style={{ backgroundColor: this.state.randHex }}></div>
        </div>
        <div className="tile-container">
          <table>{this.generateTable()}</table>
        </div>
        <div className="score-container">
          <h3>Score: {this.state.score}</h3>
        </div>
      </div>
    );
  }

  shuffleArr(arr) {
    var currentIndex = arr.length;
    var temporaryValue;
    var randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
  
    return arr;
  }

  generateTable = () => {
    var i;
    var colorTable = [];

    for (i = 0; i < 3; i++) {
      colorTable.push(
        <tr key={i}>
          <td>
            <button
              className="color-button"
              style={{ color: this.state.hexArr[i * 3] }}
              value={this.state.colors[i * 3].color}
              onClick={(e) => this.determineGame(e.target.value)}>
              {this.state.colors[i * 3].color}
            </button>
          </td>
          <td>
            <button
              className="color-button"
              style={{ color: this.state.hexArr[i * 3 + 1] }}
              value={this.state.colors[i * 3 + 1].color}
              onClick={(e) => this.determineGame(e.target.value)}>
              {this.state.colors[i * 3 + 1].color}
            </button>
          </td>
          <td>
            <button
              className="color-button"
              style={{ color: this.state.hexArr[i * 3 + 2] }}
              value={this.state.colors[i * 3 + 2].color}
              onClick={(e) => this.determineGame(e.target.value)}>
              {this.state.colors[i * 3 + 2].color}
            </button>
          </td>
        </tr>
      );
    }

    return <tbody>{colorTable}</tbody>;
  };

  determineGame = (id) => {
    console.log("id: ", id);

    var s = this.state.score;

    if (id === this.state.randColor) {
      s++;
      this.setState({ score: s });
      this.renderTable();
    } else {
      console.log("YOU LOSE");
      this.props.onGameOver();
    }
  };

  renderTable = () => {
    var rC = this.state.randColor;
    var rH = this.state.randHex;
    var c = this.state.colors;
    var h = this.state.hexArr;
    var r = Math.floor(Math.random() * 9);

    this.shuffleArr(c);
    this.shuffleArr(h);

    console.log("c: ", c);
    console.log("h: ", h);
    console.log("r: ", r);
    rC= c[r].color;
    rH = c[r].hex;
    
    console.log("rC: ", rC);
    console.log("rH: ", rH);
    

    this.setState({ colors: c, hexArr: h, randColor: rC, randHex: rH });
    console.log(this.state);
  }
}

export default PlayPage;
