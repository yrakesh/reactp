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

function FancyBorder(props) {
  return (
    <div className={'FancyBorder Fancyborder-' + props.color}>
    {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {props.children}
    </FancyBorder>
  );
}

function SplitPane(props) {
  return (
    <div class="split-pane">
      <div class="sp-left">
        {props.left}
      </div>
      <div class="sp-right">
        {props.right}
      </div>
    </div>
  );
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {login: ''};
    this.onLoginChange = this.onLoginChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  onLoginChange(event) {
    this.setState({login: event.target.value});
  }
  handleSignUp(event) {
    alert(`${this.state.login} - welcome!!!`);
  }
  render() {
    return <div>
             <Dialog title="dialog title" content="this is dialog content">
                <input value={this.state.login} onChange={this.onLoginChange} />
                <button onClick={this.handleSignUp}>Sign me up!</button>
             </Dialog>
             <SplitPane left={
               <div class="contacts">contacts</div>
             } right={
               <div class="chats">chats</div>
             }>
             </SplitPane>
           </div>
  }
}

export default App;