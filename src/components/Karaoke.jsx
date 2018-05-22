import React from 'react';
import { Route } from 'react-router-dom';

import KaraokeInfo from './karaoke/KaraokeInfo';
import Slides from './karaoke/Slides';

const Karaoke = () => [
  <Route key={1} path="/karaoke" exact component={KaraokeInfo} />,
  <Route key={2} path="/karaoke/slides" component={Slides} />,
];

export default Karaoke;
