import React from 'react';
import {Button} from 'react-bootstrap';

import {auth} from '../firebase';

const SignOutButton = () =>
    <Button bsStyle="danger"
            type="button"
            onClick={auth.doSignOut}>
        Sign Out
    </Button>;


export default SignOutButton;