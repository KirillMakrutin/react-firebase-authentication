import React from 'react';
import {NavLink as Link} from 'react-router-dom';

import * as routes from '../constants/routes';

import '../assets/Navigation.css';
import SignOutButton from "./SignOut";

import AuthUserContext from './AuthUserContext';

const Navigation = () =>
    <div className="Navigation">
        <AuthUserContext.Consumer>
            {authUser => authUser
                ? <NavigationAuth/>
                : <NavigationNonAuth/>
            }
        </AuthUserContext.Consumer>
    </div>;

const NavigationAuth = () =>
    <ul>
        <li><Link to={routes.LANDING}>Landing</Link></li>
        <li><Link to={routes.HOME}>Home</Link></li>
        <li><Link to={routes.ACCOUNT}>Account</Link></li>
        <li><SignOutButton/></li>
    </ul>;

const NavigationNonAuth = () =>
    <ul>
        <li><Link to={routes.LANDING}>Landing</Link></li>
        <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
    </ul>;

export default Navigation;
