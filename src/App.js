import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {isOpen: false};
    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler(event) {
    this.setState({isOpen: !this.state.isOpen});
  }
  onFocusHandler(event) {
  }
  onBlurHandler(event) {
    this.setState({isOpen: false});
  }
  render() {
    return <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
              <button onClick={this.onClickHandler}>Select an option</button>
              {
                this.state.isOpen ?
                  <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                  </ul>
               : ''}
           </div>
  }
}

export default App;