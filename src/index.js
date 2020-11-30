import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./styles.css";

var time;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => (props.isValid && "cornflowerblue") || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  counttest() {
    time = setInterval(() => this.incrementCount(), 1000);
  }

  Stop() {
    clearInterval(time);
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  reset() {
    this.setState({
      count: (this.state.count = 0)
    });
  }

  render() {
    var test;
    return (
      <div>
        <p>
          nb secondes {Math.round(this.state.count / 60)} :{" "}
          {this.state.count % 60}{" "}
        </p>
        <button onClick={() => this.counttest()}>Cliquez</button>
        <button onClick={() => this.Stop()}>Arreter</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
