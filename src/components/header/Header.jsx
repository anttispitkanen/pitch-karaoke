import React from 'react';
import logo from './logo.png';

import './header.scss';

const Header = () => (
    <header className="main-header">
        <a href="http://tampere.es" target="_blank">
            <img className="header-logo" src={logo} />
        </a>
        <h1 className="main-heading">Pitch Karaoke</h1>
    </header>
);

export default Header;
