import React, { Component } from 'react';
import { adjectives } from '../../data/adjectives';
import { nouns } from '../../data/nouns';
import { randomPicker } from '../../utils/randomPicker';

import './company.scss';

class Company extends Component {
    constructor() {
        super();
        const adjective = randomPicker(adjectives);
        const noun = randomPicker(nouns);
        this.state = {
            adjective,
            noun
        };
    }

    draw = () => {
        const adjective = randomPicker(adjectives);
        const noun = randomPicker(nouns);
        this.setState({
            adjective,
            noun
        });
    }

    render() {
        const company = this.state.adjective + ' ' + this.state.noun;

        return (
            <div className="company-container">
                <span className="company-intro">The name of your company/product/service:</span>
                <span className="company-name">{company}</span>
                <button className="company-btn" onClick={this.draw}>
                    Draw new name
                </button>
            </div>
        );
    }
}

export default Company;
