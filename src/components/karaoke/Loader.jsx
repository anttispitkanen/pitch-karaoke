import React from 'react';
import logo from './tampere-es-logo-shape.png';
import './slide.scss';

const Loader = () => (
  <div className="slide loader">
    <p className="slide-title">Founding a company for you...</p>
    <img className="loader-logo-spinner" src={logo} alt="spinner logo" />
  </div>
);

export default Loader;
