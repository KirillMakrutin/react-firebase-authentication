import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './LandingPage';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import './App.css';

import * as routes from '../constants/routes';

const App = () =>
    <Router>
      <div className="App">
        <Navigation/>

        <hr/>

        <Route
            exact path={routes.LANDING}
            component={LandingPage}/>
        <Route
            exact path={routes.SIGN_UP}
            component={SignUpPage}/>
        <Route
            exact path={routes.SIGN_IN}
            component={SignInPage}/>
        <Route
            exact path={routes.PASSWORD_FORGET}
            component={PasswordForgetPage}/>
        <Route
            exact path={routes.HOME}
            component={HomePage}/>
        <Route
            exact path={routes.ACCOUNT}
            component={AccountPage}/>
      </div>
    </Router>;

export default App;
