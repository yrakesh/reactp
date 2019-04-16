import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import logo from './logo.svg';
import './App.css';

function UserGreeting() {
  return <h1>Welcome</h1>;
}
function GuestGreeting() {
  return <h1>Please sign-in</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLogged;
  if(isLoggedIn) {
    return <UserGreeting/>;
  }
  return <GuestGreeting/>;
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>Login</button>
  );
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>Logout</button>
  );
}
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {
        unreadMessages.length && 
        <h2>You have {unreadMessages.length} unread messages.</h2>
      }
    </div>
  );
}

const messages= ['React', 'Re: React', 'Re:Re: React'];

function ListItem(props) {
  return <li id={props.id}>{props.value}</li>;
}
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {
        numbers.map((number) => 
            <ListItem key={number.toString()} id={number} value={number*3} />
          )
      }
    </ul>
  );
}

const numbers = [1, 5, 7, 9, 10];

function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

function getFahrTemp(tempC) {
  return (tempC * 9/5) + 32;
}

function getCelsTemp(tempF) {
  return (tempF - 32) * 5/9;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input)) {
    return '';
  }
  return convert(input);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature : '', scale : 'c'};
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrheitChange = this.handleFahrheitChange.bind(this);
  }
  handleCelsiusChange(temperature) {
    console.log('TEMPERATURE', temperature);
    this.setState({scale: 'c', temperature});
  }
  handleFahrheitChange(temperature) {
    console.log('temperature', temperature);
    this.setState({temperature, scale: 'f'});
  }
  render() {
    const scale       = this.state.scale;
    const temperature = this.state.temperature;
    const celsius     = scale === 'f' ? tryConvert(temperature, getCelsTemp) : temperature;
    const fahrheit    = scale === 'c' ? tryConvert(temperature, getFahrTemp) : temperature;
    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius}  onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrheit} onTemperatureChange={this.handleFahrheitChange} />
        <BoilingVerdict celsius={celsius} />
      </div>
    );
  }
}

export default App;