import React, { Component } from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTempCelsChange = this.handleTempCelsChange.bind(this);
    this.handleTempFahrChange = this.handleTempFahrChange.bind(this);
    this.state = {isLogged : false, value: '', tempCelsius: '', tempFahr : ''};
  }
  handleLoginClick(props) {
    this.setState({isLogged : true});
  }
  handleLogoutClick(props) {
    this.setState({isLogged : false});
  }
  handleNameChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }
  handleSubmit(e) {
    console.log('name was submitted', this.state.value);
    e.preventDefault();
  }
  getFahrTemp(tempC) {
    return (tempC * 9/5) + 32;
  }
  getCelsTemp(tempF) {
    return (tempF - 32) * 5/9;
  }
  handleTempCelsChange(event) {
    let tempC = event.target.value,
        tempF = this.getFahrTemp(tempC);

    this.setState({tempCelsius: tempC, tempFahr: tempF});
  }
  handleTempFahrChange(event) {
    let tempF = event.target.value,
        tempC = this.getCelsTemp(tempF);

    this.setState({tempCelsius: tempC, tempFahr: tempF});
  }
  render() {
    const isLoggedIn = this.state.isLogged;
    const tempCelsius = this.state.tempCelsius;
    const tempFahr    = this.state.tempFahr;
    let button;

    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>
    } else {
      button = <LoginButton onClick={this.handleLoginClick}/>
    }
    return (
      <div>
        <NumberList numbers={numbers} />
        <Greeting isLogged={!true} />
          {button}
          <Mailbox unreadMessages={messages}/>
          User is {isLoggedIn ? 'currently' : 'not'} logged in.
          <form onSubmit={this.handleSubmit}>
            UserName: <input type="text" value={this.state.value} onChange={this.handleNameChange} />
            <input type="submit" value="submit" />
          </form>
          <fieldset>
            <legend>Enter temperature in celsius:</legend>
            <input value={tempCelsius} onChange={this.handleTempCelsChange} />
          </fieldset>
          <fieldset>
            <legend>Enter temperature in fahrenheit:</legend>
            <input value={tempFahr} onChange={this.handleTempFahrChange} />
          </fieldset>
          <BoilingVerdict celsius={tempCelsius} />
      </div>
    );
  }
}

export default App;
