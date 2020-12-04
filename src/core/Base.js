import React from 'react';
import PropTypes from 'prop-types';

import Menu from "./Menu";

const Base = ({title="Home Page",description="Bla Bla", className="bg-dark text-white p-4", children}) => {
    return (
        <div>
            <Menu></Menu>
            <div className="container-fluid">
                <div className="jumbotrn bg-dark text-white text-center">
                     <h2 className="display-4">{title}</h2>
                     <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-auto py3">
                <div className="container-fluid bg-success text-white text-center py3">
                    <h4>Footer Text</h4>
                    <button className="btn btn-warning">Contact</button>
                    <div className="container">
                        <span className="muted">An Amazing Site</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

Base.propTypes = {};

export { Base };