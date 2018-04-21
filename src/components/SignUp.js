import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Grid, Row, Col, FormControl, Button} from 'react-bootstrap';
import '../assets/SignUpForm.css'

import { auth } from '../firebase';

import * as routes from '../constants/routes';

const SignUpPage = ({history}) =>
    <div>
        <h1>SignUp</h1>
        <SignUpForm history={history}/>
    </div>;

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class SignUpForm extends Component {
    state = {
        ...INITIAL_STATE
    };

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                console.log(authUser);
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <form onSubmit={this.onSubmit} className="SignUpForm">
                            <FormControl
                                value={username}
                                onChange={event => this.setState(byPropKey('username', event.target.value))}
                                type="text"
                                placeholder="Full Name"
                            />
                            <FormControl
                                value={email}
                                onChange={event => this.setState(byPropKey('email', event.target.value))}
                                type="text"
                                placeholder="Email Address"
                            />
                            <FormControl
                                value={passwordOne}
                                onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                                type="password"
                                placeholder="Password"
                            />
                            <FormControl
                                value={passwordTwo}
                                onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                                type="password"
                                placeholder="Confirm Password"
                            />
                            <Button bsStyle="primary" disabled={isInvalid} type="submit">
                                Sign Up
                            </Button>

                            {error && <p>{error.message}</p>}
                        </form>
                    </Col>
                </Row>
            </Grid>

        );
    }
}

const SignUpLink = () =>
    <p>
        Don't have an account?
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>;

export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink,
};