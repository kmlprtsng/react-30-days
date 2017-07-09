import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Clock />
    );
  }
}

class Clock extends Component {
  constructor(props) {
    super(props); //not doing this will lead to errors
    this.state = this.getTime();
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  getTime(){
    const currentTime = new Date(),
          hours = currentTime.getHours(),
          minutes = currentTime.getMinutes(),
          seconds = currentTime.getSeconds(),
          ampm = hours >= 12 ? 'pm' : 'am';

    return { currentTime, hours, minutes, seconds, ampm }
  }

  setTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    this.setState(this.getTime, this.setTimer);
  }

  render() {
    const { currentTime, hours, minutes, seconds, ampm } = this.state;

    return (
      <div className="clock">
        {
          hours == 0 ? 12 :
            (hours > 12) ?
              hours - 12 : hours
        }:{
          minutes > 9 ? minutes : `0${minutes}`
        }:{
          seconds > 9 ? seconds : `0${seconds}`
        } {ampm}
      </div>
    );
  }
}

export default App;
