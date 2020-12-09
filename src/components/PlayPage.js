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
    randColor: { color: "Red", hex: "#ff0000" },
  };

  componentDidMount() {
    var rand = this.state.randColor;
    var c = this.state.colors;
    var h = this.state.hexArr;
    var r = Math.floor(Math.random() * 10);

    this.shuffleArr(c);
    this.shuffleArr(h);

    rand.color = c[r].color;
    rand.hex = c[r].hex;

    console.log("c: ", c);
    console.log("h: ", h);

    this.setState({ colors: c, hexArr: h, randColor: rand });
    console.log(this.state);
  }

  render() {
    return (
      <div className="play-container">
        <div className="guide-container">
          <div
            className="color-square"
            id={this.state.randColor.hex}
            style={{ backgroundColor: this.state.randColor.hex }}></div>
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

  selectColor = () => {};

  shuffleArr = (arr) => {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  };

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

    if (id === this.state.randColor.color) {
      s++;
      this.setState({ score: s });
      this.renderTable();
    } else {
      console.log("YOU LOSE");
      this.props.onGameOver();
    }
  };

  renderTable = () => {
    var rand = this.state.randColor;
    var c = this.state.colors;
    var h = this.state.hexArr;
    var r = Math.floor(Math.random() * 10);

    this.shuffleArr(c);
    this.shuffleArr(h);

    rand.color = c[r].color;
    rand.hex = c[r].hex;

    console.log("c: ", c);
    console.log("h: ", h);

    this.setState({ colors: c, hexArr: h, randColor: rand });
    console.log(this.state);
  };
}

export default PlayPage;
