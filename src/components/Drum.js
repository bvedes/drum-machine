import React, { Component } from "react";
import { keyCodes } from "./utils";

import "./Drum.css";

class Drum extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = ({ key }) => {
    console.log(" key: ", key);
    const srcr = keyCodes.find((keyCode) => keyCode.letter === key)?.src;
    this.playSound(srcr);
  };

  playSound = (src) => {
    console.log(src);
    const audio = new Audio(src);
    console.log(" audio: ", audio);
    audio.play();
  };

  render() {
    return (
      <div className="machine" id="drum-machine">
        {keyCodes.map(({ letter, soundName, src }) => (
          <div
            className="drum-pad"
            id="display"
            key={soundName}
            onClick={() => this.playSound(src)}
          >
            <div className="letter">{letter}</div>
            <div className="sound-name">{soundName}</div>
          </div>
        ))}
      </div>
    );
  }
}
export default Drum;
