
import React, { Children } from 'react';
import PropTypes from 'prop-types';


import "./App.css";

const App = ({children}) => {
    return (
        <div className="app__container">
            
            <div className="app__body">
                {children}
            </div>
        </div>
    );
};

App.propTypes = {};

export { App };