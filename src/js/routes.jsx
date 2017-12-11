require('../static/css/slds.min.css');
require('../static/css/style.css');

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FleetTable from './components/Index/FleetTable';
import ShipProfile from './components/Ship/ShipProfile';

console.log(__filename);

module.exports = (
  <div className="container">
      <Switch>
        <Route exact path="/" component={FleetTable} />
        <Route path="/ship/:mmsi" component={ShipProfile} />
        <Route path="*" component={FleetTable} />
      </Switch>
  </div>
);
