import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from './Loader';
import Slide from './Slide';
import LastSlide from './LastSlide';
import Timer from './Timer';

import { adjectives } from '../../data/adjectives';
import { nouns } from '../../data/nouns';
import { customers } from '../../data/customers';
import { problems } from '../../data/problems';
import { solutions } from '../../data/solutions';
import { products } from '../../data/products';
import { pics } from '../../data/pics';
import { randomPicker } from '../../utils/randomPicker';

const createCompanyName = () =>
  randomPicker(adjectives) + ' ' + randomPicker(nouns);

class Slides extends Component {
  constructor() {
    super();

    const company = {
      name: 'company',
      title: 'Company name',
      createImgUrl: () => randomPicker(pics) + '.jpg',
      imgUrl: randomPicker(pics) + '.jpg',
      img: null,
      createContent: () => createCompanyName(),
      content: '',
    };
    const problem = {
      name: 'problem',
      title: 'Problem',
      createImgUrl: () => randomPicker(pics) + '.jpg',
      imgUrl: randomPicker(pics) + '.jpg',
      img: null,
      createContent: () => randomPicker(problems),
      content: '',
    };
    const solution = {
      name: 'solution',
      title: 'Solution',
      createImgUrl: () => randomPicker(pics) + '.jpg',
      imgUrl: randomPicker(pics) + '.jpg',
      img: null,
      createContent: () => randomPicker(solutions),
      content: '',
    };
    const product = {
      name: 'product',
      title: 'Product/service',
      createImgUrl: () => randomPicker(pics) + '.jpg',
      imgUrl: randomPicker(pics) + '.jpg',
      img: null,
      createContent: () => randomPicker(products),
      content: '',
    };
    const customer = {
      name: 'customer',
      title: 'Customers',
      createImgUrl: () => randomPicker(pics) + '.jpg',
      imgUrl: randomPicker(pics) + '.jpg',
      img: null,
      createContent: () => randomPicker(customers),
      content: '',
    };

    this.state = {
      loading: true,
      current: 0,
      slides: [company, problem, solution, product, customer],
    };

    document.addEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = e => {
    const key = e.keyCode;
    if (key === 39 || key === 40) this.next();
    if (key === 37 || key === 38) this.prev();
    if (key === 27) window.history.back();
  };

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  async componentDidMount() {
    await this.randomize();
  }

  randomize = async () => {
    this.setState({
      loading: true,
      current: 0,
    });

    const updatedSlides = await Promise.all(
      this.state.slides.map(async slide => ({
        ...slide,
        content: slide.createContent(),
        imgUrl: slide.createImgUrl(),
        img: await this.fetchImg(slide.imgUrl),
      })),
    );

    this.setState({
      loading: false,
      slides: updatedSlides,
    });
  };

  fetchImg = url =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob); // read blob to base64 string
        reader.onloadend = async () => {
          resolve(await reader.result);
        };
      } catch (e) {
        console.error(e);
        reject(e);
      }
    });

  next = () => {
    // index slides[slides.length] is allowed as in that case we won't try
    // to read from the index, but display the ending slide
    if (this.state.current < this.state.slides.length) {
      this.setState({
        current: this.state.current + 1,
      });
    }
  };

  prev = () => {
    if (this.state.current > 0) {
      this.setState({
        current: this.state.current - 1,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    const { current, slides } = this.state;
    if (current >= slides.length) {
      return <LastSlide again={this.randomize} />;
    }

    const currentSlide = slides[current];
    return (
      <div>
        {this.props.timerUsed && <Timer />}
        <Slide {...currentSlide} next={this.next} prev={this.prev} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timerUsed: state.timer.timerUsed,
});

export default connect(mapStateToProps)(Slides);
