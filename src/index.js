import React from 'react';
import ReactDOM from 'react-dom';

function App2() {
  function doubleNumbers(array) {
    let doubleArray = array.map((item) => item * 2);
    console.log(doubleArray);
  }
  return (
    <div className="App2">
      <h4>hello app2</h4>
      <div className="task1">
        <button onClick={() => doubleNumbers([2, 5, 100])}>Task1</button>
      </div>
    </div>
  );
}
export default App2;

ReactDOM.render(<App2 />, document.getElementById('App2'));

import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));

import AgentsList from './Components';

ReactDOM.render(<AgentsList />, document.getElementById('components'));

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h4>Привет, мир!</h4>
        <p>Сейчас {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById('lifecycle'));

class PrintButton extends React.Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
  }
  press(name, age) {
    console.log(`Name ${name} Age ${age}`);
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.press('Bob', 23);
          }}
        >
          First
        </button>
      </div>
    );
  }
}
ReactDOM.render(<PrintButton />, document.getElementById('event'));

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { welcome: 'Welcome' };
  }
  render() {
    return <h4>{this.state.welcome}</h4>;
  }
}

ReactDOM.render(<Hello />, document.getElementById('state'));

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cssclass: 'off' };
    this.press = this.press.bind(this);
  }
  press() {
    let className = this.state.cssclass == 'off' ? 'on' : 'off';
    this.setState({ cssclass: className });
  }
  render() {
    return (
      <button onClick={this.press} className={this.state.cssclass}>
        {this.state.cssclass}
      </button>
    );
  }
}

ReactDOM.render(<ClickButton />, document.getElementById('state2'));

import Map from './Map';

ReactDOM.render(<Map />, document.getElementById('map'));
