import React from 'react';
import { Link } from 'react-router-dom';

import './karaokeinfo.scss';

const KaraokeInfo = () => (
  <div className="karaoke-wrapper">
    <h3>Karaoke Pitching!</h3>
    <p>You'll get five slides:</p>
    <ol>
      <li>Company name</li>
      <li>Problem</li>
      <li>Solution</li>
      <li>Your product/service</li>
      <li>Customer</li>
    </ol>
    <p>The content is random.</p>
    <p>You have to pitch.</p>
    <p className="ready">Ready?</p>

    <Link className="go-link" to="/karaoke/slides">
      Go!
    </Link>

    <p>
      <b>Tips:</b> Use arrow keys or tap the sides of the screen to move between
      slides. Press esc or back to close the slideshow. You get new slides by
      closing the slideshow and opening it again, or by refreshing the page when
      the slides are open.
    </p>
  </div>
);

export default KaraokeInfo;
