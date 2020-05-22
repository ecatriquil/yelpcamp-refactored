import React from 'react';
import PropTypes from 'prop-types';
const Jumbotron = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">{props.description}</p>
            </div>
        </div>
    );
};

Jumbotron.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Jumbotron;