import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
