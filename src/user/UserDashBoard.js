import React from 'react';
import PropTypes from 'prop-types';

import {Base} from "../core/Base"

const UserDashBoard = props => {
    return (
        <Base title="User dashboard">
           <h1>Welcome to user dashboard page</h1>
        </Base>
    );
};

UserDashBoard.propTypes = {};

export default UserDashBoard;