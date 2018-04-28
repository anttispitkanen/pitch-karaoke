import React from 'react';
import classNames from 'classnames';
import './timeSelector.scss';

const TimeSelector = ({ className, changeTime, closeSelector }) => (
    <div className={classNames('time-selector-container', className)}>
        <button className="time-btn" onClick={() => changeTime(30)}>30 seconds</button>
        <button className="time-btn" onClick={() => changeTime(60)}>1 minute</button>
        <button className="time-btn" onClick={() => changeTime(120)}>2 minutes</button>
        <button className="time-btn" onClick={() => changeTime(180)}>3 minutes</button>
        <button className="time-btn" onClick={() => changeTime(300)}>5 minutes</button>
        <button className="close-btn" onClick={closeSelector}>Cancel</button>
    </div>
);

export default TimeSelector;
