import React from "react";

function Scoreboard(props) {
  return (
    <div className="scoreboard-container">
      <div className="best-score">Best Score: {props.best}</div>
      <div className="current-score">Current Score: {props.current}</div>
    </div>
  );
}

export default Scoreboard;
