import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  //   let user;
  //   if (localStorage.getItem('user')) {
  //     user = JSON.parse(localStorage.getItem('user'));
  //   }
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {props.isAuth ? (
            <React.Fragment>
              <li>
                <Link to="/page">Protected page</Link>
              </li>
              <li>
                <Link to="/page" onClick={() => props.onAuth(false)}>
                  Sign out
                </Link>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </React.Fragment>
          )}

          {/* <li>
            <Link to="/register">Register</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
