import React, { Component } from "react";

export class CounterClassBest extends React.Component {
  //a constructor is a method that handles thhe initial state of an object
  // It can also be used to bind event handlers to the component
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);

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
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h3>best way: {this.state.count}</h3>
      </div>
    );
  }
}

export default CounterClassBest;
