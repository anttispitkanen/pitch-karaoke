import React from 'react';
import logo from './logo.png';
import './footer.scss';

const Footer = () => (
    <footer className="main-footer">
        <a href="http://tampere.es" target="_blank" rel="noopener noreferrer">
            <img className="footer-logo" src={logo} alt="logo" />
        </a>
        <span className="github">
            Feel free to fork on <a href="https://github.com/anttispitkanen/pitch-karaoke" target="_blank" rel="noopener noreferrer">Github</a>!
        </span>
        <span className="copyright">
            © 2018 <a href="http://tampere.es" target="_blank" rel="noopener noreferrer">Tampere ES
            </a>, <a href="https://twitter.com/poetkoe" target="_blank" rel="noopener noreferrer">Antti Pitkänen</a>
        </span>
    </footer>
);

export default Footer;
