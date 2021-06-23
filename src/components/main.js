  
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import ArLocation from './arlocation';
import MapLocation from './maplocation';
import ArLocation2 from './camv2';
import ArLocation3 from './camv3';
import ArLocation4 from './camv4';
import ArLocation5 from './camv5';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/arlocation" component={ArLocation} />
    <Route path="/arlocation2" component={ArLocation2} />
    <Route path="/arlocation3" component={ArLocation3} />
    <Route path="/arlocation4" component={ArLocation4} />
    <Route path="/arlocation5" component={ArLocation5} />
    <Route path="/maplocation" component={MapLocation} />
  </Switch>
)

export default Main;