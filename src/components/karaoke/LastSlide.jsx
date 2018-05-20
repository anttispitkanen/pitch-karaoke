import React, { Component } from 'react';

import './slide.scss';

class LastSlide extends Component {
    constructor() {
        super();
        document.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.handleKeyUp);
    }

    handleKeyUp = e => {
        // trigger again() on pressing space or forward or down
        const key = e.keyCode;
        if (key === 32 || key === 39 || key === 40) {
            this.props.again();
        }
    }

    render() {
        return (
            <div className="slide last-slide">
                <p className="slide-title">Thank you!</p>
                <button
                    className="go-again-btn"
                    onClick={() => this.props.again()}>
                    Go again!
                </button>

                <p className="last-slide-hint">
                    (Press down, right or space to go again)
                </p>
            </div>
        );
    }
}

export default LastSlide;
