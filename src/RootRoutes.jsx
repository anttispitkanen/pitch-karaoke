import React from 'react';
import { Route } from 'react-router-dom';

import Lander from './components/lander/Lander';
import QuickFire from './components/QuickFire';
// import Karaoke from ... // TODO: add

const RootRoutes = () => (
    <div>
        <Route path="/" exact component={Lander} />
        <Route path="/quickfire" component={QuickFire} />
        <Route path="/karaoke" component={() => <div>Karaoke is under construction! :D</div>} />
    </div>
);

export default RootRoutes;
