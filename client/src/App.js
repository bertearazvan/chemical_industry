import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Login from './pages/Login';
import HomeDepot from './pages/HomeDepot';
import HomeWarehouse from './pages/HomeWarehouse';
import Ticket from './pages/Ticket';
import TicketDetails from './pages/TicketDetails';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home-depot">
        <HomeDepot />
      </Route>
      <Route path="/home-warehouse">
        <HomeWarehouse />
      </Route>
      <Route path="/ticket-number">
        <Ticket />
      </Route>
      <Route path="/ticket-details/:ticketNumber">
        <TicketDetails />
      </Route>
    </Switch>
  );
};

export default App;
