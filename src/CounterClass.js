import React, { Component } from "react";

export class CounterClass extends React.Component {
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
  };
  

  reset() {
    this.setState({
      count: 0
    });
  };
  render() {
    return (

   <div>
   <button className='inc' onClick={(e) => this.increment(e)}>Increment!</button>
    <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
    <h3>ok way: {this.state.count}</h3>
  </div>
    );
  }
};


export default CounterClass
