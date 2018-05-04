import React from 'react';
import { Link } from 'react-router-dom';

import './karaokeinfo.scss';

const KaraokeInfo = () => (
    <div className="karaoke-wrapper">
        <h3>Karaoke Pitching!</h3>
        <p>You'll get four slides:</p>
        <ol>
            <li>Company name</li>
            <li>Problem</li>
            <li>Solution</li>
            <li>Customer</li>
        </ol>
        <p>The content is random.</p>
        <p>You have to pitch.</p>
        <p className="ready">Ready?</p>

        <Link className="go-link" to="/karaoke/slides">Go!</Link>

        <p>(Press esc or back to close slideshow)</p>
    </div>
);

export default KaraokeInfo;
