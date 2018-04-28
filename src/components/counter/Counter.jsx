import React, { Component } from 'react';

import './counter.scss';

const time = 120;

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            running: false,
            time: time,
            timer: null
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
                        time: this.state.time - 1
                    })
                }
            }, 1000)
        });
    }

    pause = () => {
        this.setState({
            running: false
        });
        clearInterval(this.state.timer);
    }

    reset = () => {
        this.setState({
            running: false,
            time: time
        });
        clearInterval(this.state.timer);
    }

    renderTime = () => {
        const { time } = this.state;
        const min = Math.floor(time / 60);
        const sec = time % 60;
        const secString = sec < 10 ? '0' + sec : sec;
        return min + ':' + secString;
    }

    color = () => {
        if (this.state.time > 60) {
            return 'black';
        } else if (this.state.time > 30) {
            return 'orange';
        } else {
            return 'red';
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="counter-container">
                <span className="time" style={{ color: this.color() }}>
                    {this.renderTime()}
                </span>
                <div className="btns-container">
                    <button className="pause-start" onClick={this.state.running ? this.pause : this.start}>
                        { this.state.running ? 'Pause' : 'Start' }
                    </button>
                    <button className="reset" onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Counter;
