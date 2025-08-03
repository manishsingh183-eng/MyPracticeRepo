import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  sayHello = () => {
    alert("Hello! This is a static message.");
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  decrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  };

  sayWelcome = (msg) => {
    alert(`Message: ${msg}`);
  };

  handleSyntheticEvent = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: '40px', fontFamily: 'Arial' }}>
        <h1>React Event Examples</h1>

        <h2>Counter: {this.state.count}</h2>

        <div style={{ marginBottom: '20px' }}>
          <button onClick={this.handleIncrement} style={{ marginRight: '10px' }}>
            Increase
          </button>
          <button onClick={this.decrement} style={{ marginRight: '10px' }}>
            Decrease
          </button>
          <button onClick={() => this.sayWelcome("welcome")} style={{ marginRight: '10px' }}>
            Say Welcome
          </button>
          <button onClick={this.handleSyntheticEvent}>
            OnPress
          </button>
        </div>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
