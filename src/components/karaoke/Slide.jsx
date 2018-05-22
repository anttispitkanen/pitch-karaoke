import React from 'react';

import './slide.scss';

const Slide = ({ img, title, content, next, prev }) => (
  <div className="slide" style={{ backgroundImage: `url(${img})` }}>
    <p className="slide-title">{title}</p>
    <p className="slide-content">{content}</p>
    <div className="clickarea left" onClick={prev} />
    <div className="clickarea right" onClick={next} />
  </div>
);

export default Slide;
