import React, { Component } from "react";

export class CounterClass2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }
  render() {
    return (
      <div className="App-headergrey">
        <button className="inc" onClick={this.increment.bind(this)}>
          Increment bind
        </button>
        <button className="reset" onClick={this.reset.bind(this)}>
          Reset bind
        </button>
        <button className="inc" onClick={() => this.increment()}>
          Increment lambda
        </button>
        <button className="reset" onClick={() => this.reset()}>
          Reset lambda
        </button>
        <h3>Performance Knock: {this.state.count}</h3>
      </div>
    );
  }
}

export default CounterClass2;
