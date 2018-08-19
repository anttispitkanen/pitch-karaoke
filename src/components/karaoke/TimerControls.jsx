import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { timerToggleUse, timerSetTime } from '../../redux/timer';
import { timeFormatter } from '../../utils/timeFormatter';

class TimerControls extends Component {
  render() {
    const {
      timerUsed,
      timerSeconds,
      timerToggleUse,
      timerSetTime,
    } = this.props;
    return (
      <div className="timer-controls-container">
        <h3>Set a timer for the pitch?</h3>
        <div className="timer-on-off-btns-container">
          <button
            className="btn-timer on"
            disabled={timerUsed}
            onClick={() => timerToggleUse()}
          >
            TIMER ON
          </button>
          <button
            className="btn-timer off"
            disabled={!timerUsed}
            onClick={() => timerToggleUse()}
          >
            TIMER OFF
          </button>
        </div>

        {timerUsed && (
          <div className="time-and-btns-container">
            <span className="selected-time">{timeFormatter(timerSeconds)}</span>
            <div className="timer-time-selector-btns-container">
              <TimerSetTimeBtn
                timerSeconds={timerSeconds}
                time={60}
                clickHandler={timerSetTime}
              >
                1 minute
              </TimerSetTimeBtn>
              <TimerSetTimeBtn
                timerSeconds={timerSeconds}
                time={120}
                clickHandler={timerSetTime}
              >
                2 minutes
              </TimerSetTimeBtn>
              <TimerSetTimeBtn
                timerSeconds={timerSeconds}
                time={180}
                clickHandler={timerSetTime}
              >
                3 minutes
              </TimerSetTimeBtn>
              <TimerSetTimeBtn
                timerSeconds={timerSeconds}
                time={240}
                clickHandler={timerSetTime}
              >
                4 minutes
              </TimerSetTimeBtn>
              <TimerSetTimeBtn
                timerSeconds={timerSeconds}
                time={300}
                clickHandler={timerSetTime}
              >
                5 minutes
              </TimerSetTimeBtn>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const TimerSetTimeBtn = ({ timerSeconds, time, clickHandler, children }) => (
  <button
    className={classNames('btn-time-select', { active: timerSeconds === time })}
    onClick={() => clickHandler(time)}
  >
    {children}
  </button>
);

const mapStateToProps = state => ({
  timerUsed: state.timer.timerUsed,
  timerSeconds: state.timer.seconds,
});

const actions = {
  timerToggleUse,
  timerSetTime,
};

export default connect(
  mapStateToProps,
  actions,
)(TimerControls);
