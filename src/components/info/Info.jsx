import React from 'react';
import { Link } from 'react-router-dom';

import './info.scss';

const Info = () => (
  <div className="info-container">
    <h2 className="info-heading">What is this?</h2>

    <p>
      Pitching is a{' '}
      <a
        href="https://piktochart.com/blog/startup-pitch-decks-what-you-can-learn/"
        target="_blank"
        rel="noreferrer noopener"
      >
        key part of startup culture
      </a>. And Pitch KaraokES is a fun and easy way to practice pitching!
    </p>

    <p>There are two different games to play.</p>

    <p>
      <Link to="/quickfire">Quick Fire Pitching</Link> is simple. You get a
      randomly generated company/product/service name and a limited time to
      pitch it in. Be creative!
    </p>

    <p>
      <Link to="/karaoke">Karaoke Pitching</Link> is what it sounds like. You
      get a five slide pitch deck with randomly generated content, and your job
      is to convince the audience that your business is worth buying from or
      investing in.
    </p>

    <p>
      Pitch KaraokES is powered by{' '}
      <a href="http://tampere.es" target="_blank" rel="noreferrer noopener">
        Tampere ES
      </a>{' '}
      and built by{' '}
      <a
        href="https://twitter.com/Poetkoe"
        target="_blank"
        rel="noreferrer noopener"
      >
        Antti Pitkänen
      </a>, a board member. It's{' '}
      <a
        href="https://github.com/anttispitkanen/pitch-karaoke"
        target="_blank"
        rel="noreferrer noopener"
      >
        open source
      </a>, so feel free to look at the code, submit a PR or fork your own copy!
    </p>
  </div>
);

export default Info;
