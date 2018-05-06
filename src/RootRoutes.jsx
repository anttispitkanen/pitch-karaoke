import React from 'react';
import { Route } from 'react-router-dom';

import Lander from './components/lander/Lander';
import QuickFire from './components/QuickFire';
import Karaoke from './components/Karaoke';
import Info from './components/info/Info';

const RootRoutes = () => (
    <div>
        <Route path="/" exact component={Lander} />
        <Route path="/quickfire" component={QuickFire} />
        <Route path="/karaoke" component={Karaoke} />
        <Route path="/info" component={Info} />
    </div>
);

export default RootRoutes;
