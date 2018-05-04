import React from 'react';

import './slide.scss';

const Slide = ({ img, title, content }) => (
    <div className="slide" style={{ backgroundImage: `url(${img}.jpg)` }}>
        <p className="slide-title">{title}</p>
        <p className="slide-content">{content}</p>
    </div>
);

export default Slide;
