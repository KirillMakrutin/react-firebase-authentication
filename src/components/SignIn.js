import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import '../assets/SignInForm.css';

import {Grid, Row, Col, FormControl, Button} from 'react-bootstrap';

const SignInPage = ({ history }) =>
    <div>
        <h1>SignIn</h1>
        <SignInForm history={history} />
        <SignUpLink />
    </div>;

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
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
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <form onSubmit={this.onSubmit} className="SignInForm">
                            <FormControl
                                value={email}
                                onChange={event => this.setState(byPropKey('email', event.target.value))}
                                type="text"
                                placeholder="Email Address"
                            />
                            <FormControl
                                value={password}
                                onChange={event => this.setState(byPropKey('password', event.target.value))}
                                type="password"
                                placeholder="Password"
                            />
                            <Button disabled={isInvalid} type="submit" bsStyle="primary">
                                Sign In
                            </Button>

                            { error && <p>{error.message}</p> }
                        </form>
                    </Col>
                </Row>
            </Grid>

        );
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};