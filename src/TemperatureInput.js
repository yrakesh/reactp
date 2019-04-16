
import React, { Component } from 'react';

const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature : ''};
  }
  handleChange(event) {
    this.setState({temperature : event.target.value});
  }
  render() {
    const temperature = this.state.temperature;
    const scale       = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}