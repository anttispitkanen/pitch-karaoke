import React from 'react';
import { Link } from 'react-router-dom';

import './Lander.scss';

const Lander = () => (
    <div className="lander">
        <h2 className="lander-heading">Welcome to Pitch KaraokES!</h2>
        <p className="poison">Choose your poison:</p>
        <div className="links-container">
            <Link className="link quickfire" to="/quickfire">Quick Fire Pitching</Link>
            <Link className="link karaoke" to="/karaoke">Karaoke Pitching</Link>
            <Link className="link info" to="/info">What is this?</Link>
        </div>
    </div>
);

export default Lander;
