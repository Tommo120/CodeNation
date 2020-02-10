import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
    football: "is boring"
  }

  greeting = () => {
    console.log("HURR");
    this.incrementCounter();
    this.setState({
      football: "IS REALLY BORING"
    })
  }

  ungreeting = () => {
    console.log("DURR");
    this.decrementCounter();
    this.setState({
      football: "IS STILL REALLY BORING"
    })
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  
  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return(
      <div>
        <h1>Herp de derp de diddly derp</h1>
        <button style={{height: "150px", width: "150px"}} onClick={this.greeting}>DUH</button>
        <button style={{height: "150px", width: "150px"}} onClick={this.ungreeting}>HUR</button>
        <h3>The counter is currently at {this.state.counter}</h3>
        <h3>I think that football {this.state.football}</h3>
      </div>
    )
  }
}

export default App;
