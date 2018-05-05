import React, { Component } from 'react';

import Slide from './Slide';

import { adjectives } from '../../data/adjectives';
import { nouns } from '../../data/nouns';
import { customers } from '../../data/customers';
import { problems } from '../../data/problems';
import { solutions } from '../../data/solutions';
import { pics } from '../../data/pics';
import { randomPicker } from '../../utils/randomPicker';

class Slides extends Component {
    constructor() {
        super();

        // FIXME: load pics smarter as in anttipitkanen.com
        const company = {
            title: 'Company name',
            img: randomPicker(pics),
            content: randomPicker(adjectives) + ' ' + randomPicker(nouns)
        };
        const problem = {
            title: 'Problem',
            img: randomPicker(pics),
            content: randomPicker(problems)
        };
        const solution = {
            title: 'Solution',
            img: randomPicker(pics),
            content: randomPicker(solutions)
        };
        const customer = {
            title: 'Customers',
            img: randomPicker(pics),
            content: randomPicker(customers)
        };

        this.state = {
            current: 0,
            slides: [company, problem, solution, customer]
        };

        document.addEventListener('keyup', this.handleKeyDown);
    }

    handleKeyDown = e => {
        const key = e.keyCode;
        if (key === 39 || key === 40) {
            this.next();
        } else if (key === 37 || key === 38) {
            this.prev();
        } else if (key === 27) {
            window.history.back();
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.handleKeyDown);
    }

    next = () => {
        if (this.state.current < this.state.slides.length - 1) {
            this.setState({
                current: this.state.current + 1
            });
        }
    }

    prev = () => {
        if (this.state.current > 0) {
            this.setState({
                current: this.state.current - 1
            });
        }
    }

    render() {
        const currentSlide = this.state.slides[this.state.current];
        return <Slide { ...currentSlide } next={this.next} prev={this.prev} />;
    }
}

export default Slides;
