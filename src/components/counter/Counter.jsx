import React, { Component } from 'react';
import classNames from 'classnames';
import TimeSelector from './timeSelector/TimeSelector';

import './counter.scss';

const originalFullTime = 120; // default to 2 minutes

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      running: false,
      fullTime: originalFullTime,
      time: originalFullTime,
      timer: null,
      selectorVisible: false,
    };
  }

  start = () => {
    this.setState({
      running: true,
      timer: setInterval(() => {
        if (this.state.time < 1) {
          this.pause();
        } else {
          this.setState({
            time: this.state.time - 1,
          });
        }
      }, 1000),
    });
  };

  pause = () => {
    this.setState({
      running: false,
    });
    clearInterval(this.state.timer);
  };

  reset = () => {
    this.setState({
      running: false,
      time: this.state.fullTime,
    });
    clearInterval(this.state.timer);
  };

  renderTime = () => {
    const { time } = this.state;
    const min = Math.floor(time / 60);
    const sec = time % 60;
    const secString = sec < 10 ? '0' + sec : sec;
    return min + ':' + secString;
  };

  color = () => {
    if (this.state.time > 60) {
      return 'black';
    } else if (this.state.time > 30) {
      // ES logo orange
      return 'orange';
    } else {
      // ES logo red
      return 'red';
    }
  };

  changeTime = newTime => {
    this.setState({
      fullTime: newTime,
      time: newTime,
      selectorVisible: false,
    });
  };

  showTimeSelector = () => {
    this.setState({
      selectorVisible: true,
    });
  };

  closeSelector = () => {
    this.setState({
      selectorVisible: false,
    });
  };

  render() {
    return (
      <div className="counter-container">
        <span
          className={classNames('time', this.color())}
          onClick={this.showTimeSelector}
        >
          {this.renderTime()}
        </span>
        <div className="btns-container">
          <button
            className="pause-start"
            onClick={this.state.running ? this.pause : this.start}
          >
            {this.state.running ? 'Pause' : 'Start'}
          </button>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
        <p className="counter-hint">
          (Click on the time to set a different time)
        </p>
        <TimeSelector
          className={classNames({ visible: this.state.selectorVisible })}
          changeTime={this.changeTime}
          closeSelector={this.closeSelector}
        />
      </div>
    );
  }
}

export default Counter;
