import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { timerReset, timerDecrease } from '../../redux/timer';
import { timeFormatter, color } from '../../utils/timeFormatter';

import './timer.scss';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
    };
  }

  maybeDecreaseTime = () => {
    if (this.props.seconds > 0) {
      this.props.timerDecrease();
    } else {
      clearInterval(this.state.interval);
    }
  };

  componentDidMount() {
    this.props.timerReset();
    this.setState({
      interval: setInterval(this.maybeDecreaseTime, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { seconds } = this.props;
    return (
      <div className="slide-timer-wrapper">
        <span className={classNames('time', color(seconds))}>
          {timeFormatter(seconds)}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  seconds: state.timer.currentSeconds,
});

const actions = {
  timerReset,
  timerDecrease,
};

export default connect(
  mapStateToProps,
  actions,
)(Timer);
