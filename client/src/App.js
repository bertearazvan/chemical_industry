import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Page from './pages/Page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [auth, setAuth] = React.useState(false);
  
  return (
    <React.Fragment>
      <Router>
        <NavBar isAuth={auth} onAuth={(data) => setAuth(data)} />
        <main>
          <Switch>
            <Route exact path="/" component={(props) => <Home {...props} />} />
            <Route
              exact
              path="/login"
              component={(props) => (
                <Login
                  {...props}
                  onAuth={(data) => setAuth(data)}
                  // userData={(data) => setUserData(data)}
                />
              )}
            />
            {/* <Route
              exact
              path="/register"
              component={(props) => <Register {...props} />}
            /> */}
            <PrivateRoute
              auth={auth}
              exact
              path="/page"
              component={(props) => <Page {...props} />}
            />
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  );
};

export default App;
