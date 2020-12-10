import React, { Component } from "react";
import MainPage from "./components/MainPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="link-container">
          <button
            onClick={() => window.open("http://janroces.com/")}
            className="link">
            janroces.com
          </button>
          <button
            onClick={() => window.open("https://github.com/JanRoces")}
            className="link">
            github.com/JanRoces
          </button>
        </div>
        <MainPage />
      </div>
    );
  }

  openLink = (key) => {
    console.log("key: ", key);
  };
}

export default App;
